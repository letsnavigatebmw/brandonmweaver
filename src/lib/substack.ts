import { person } from '../data/site';

// Pulls posts from the Expand Your Aperture RSS feed at request time. The pages that use it are
// cached on Vercel and refreshed hourly (ISR), so a new post appears within the hour.
export type Post = { no: string; title: string; dek: string; url: string; date: string };

const decode = (s: string) =>
  s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/\s*\u2014\s*/g, ', ') // house style: no em dashes
    .trim();

const tag = (xml: string, t: string) => decode(xml.match(new RegExp(`<${t}>([\\s\\S]*?)</${t}>`))?.[1] ?? '');

// "The Aperture Papers .008 | When Software Stops Selling Seats" -> no 008, title "When Software Stops Selling Seats".
// Posts outside the series keep their own title and get no number.
function parse(raw: string, dek: string) {
  if (!/aperture\s+paper/i.test(raw)) return { no: '', title: raw, dek: cleanDek(dek) };
  const parts = raw.split('|').map((p) => p.trim()).filter(Boolean);
  const no = raw.match(/(?:No\.?\s*|#|\.)\.?0*(\d{1,3})\b/i)?.[1]?.padStart(3, '0') ?? '';
  const headline = parts.find((p) => !/aperture\s+paper/i.test(p) && !/^(?:paper\s*no\.?\s*|#|\.)*\s*\d+$/i.test(p));
  return { no, title: headline || dek, dek: headline ? cleanDek(dek) : '' };
}

// Subtitles often end in "| The Aperture Papers | November 2026". Keep only the real subtitle.
const cleanDek = (d: string) =>
  d.split('|').map((p) => p.trim()).filter((p) => p && !/aperture\s+paper/i.test(p) && !/^[A-Z][a-z]+ \d{4}$/.test(p)).join(' | ');

export async function getPosts(limit = 12): Promise<Post[]> {
  try {
    const res = await fetch(`${person.substack}/feed`, { signal: AbortSignal.timeout(5000) });
    if (!res.ok) return [];
    const xml = await res.text();
    const seen = new Set<string>();
    const posts: Post[] = [];
    for (const [, it] of xml.matchAll(/<item>([\s\S]*?)<\/item>/g)) {
      const { no, title, dek } = parse(tag(it, 'title'), tag(it, 'description'));
      const url = tag(it, 'link');
      // Skip re-posts of the same paper number (the feed is newest first, so the latest wins).
      const key = no ? `no:${no}` : url;
      if (!title || !url || seen.has(key)) continue;
      seen.add(key);
      posts.push({
        no,
        title,
        dek,
        url,
        date: new Date(tag(it, 'pubDate')).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'America/Los_Angeles' }),
      });
      if (posts.length >= limit) break;
    }
    return posts;
  } catch {
    return [];
  }
}

# brandonmweaver.com Rebuild Brief

**For:** Claude Code
**Repo:** `letsnavigatebmw/brandonmweaver` (Vite 5 + React 18 + Tailwind 3, deployed on Vercel via Git)
**Owner:** Brandon M. Weaver
**Date:** October 30, 2026

Put this file at the repo root as `DESIGN_BRIEF.md`. Work on a branch called `redesign`, push it, let Vercel build a Preview deployment, and do not merge to `main` until Brandon approves the preview.

---

## 0. Decisions Brandon must confirm before anything ships

These are content and positioning facts. The current site contradicts itself on each one. Do not guess. Use the defaults below only for the preview build, and list every one of them in the PR description so Brandon can sign off.

| # | Issue | Where it conflicts | Preview default |
|---|---|---|---|
| D1 | **Primary audience.** The hero says "interested in partnerships, advisory roles," the contact copy says "contributing where I can add real value." That reads as job-seeking. Pick one primary reader: (a) Aperture clients, (b) Navigate investors/partners, (c) boards and executive search. | Hero, Contact | (a) Aperture clients, with (c) as secondary |
| D2 | **Is Navigate current?** Experience shows "August 2024 – March 2026." Hero, footer ("CEO @ Navigate") and "Right Now" all present it as current. | `Projects.jsx`, `Hero.jsx`, `Footer.jsx`, `RightNow.jsx` | Treat as current, dates "2024 – Present" |
| D3 | **Aperture title and founding year.** Hero: "Principal, 2018–Present." Aperture section: "Founder & CEO," "Formed in 2021." | `Hero.jsx`, `ApertureHospitality.jsx`, `Projects.jsx` | "Founder & CEO," year left as `TODO` |
| D4 | **Carlyle.** Hero calls *Sonder* "Carlyle-backed." Experience calls *Bonotel* "Carlyle-backed." At least one is wrong. | `Hero.jsx`, `Projects.jsx` | Remove "Carlyle-backed" everywhere until confirmed |
| D5 | **Bonotel math.** "$224M to $285M" is +27%. The bullets underneath claim +12% and ~+14% over 3 years. A finance reader will catch this in ten seconds. | `Projects.jsx` | Keep the bullets, remove the $224M to $285M line |
| D6 | **2017 to 2019 gap.** Experience jumps from Bonotel (2017) to Sonder (2019). Stillhouse Spirits (GM) and BLKBOX are missing. | `Projects.jsx` | Add placeholder entries marked `TODO` for Brandon to fill |
| D7 | **Big stats need receipts.** "$750M+ P&L Management" and "$10M+ Capital Raised" are the first numbers people see. If either can't be defended in an interview, cut it. | `Stats.jsx` | Keep, flag in PR |
| D8 | **Dowling St. start year.** Site says 2016. Confirm. | `Education.jsx` | Keep, flag in PR |
| D9 | **Cannes award wording.** "Cannes Golden Lion (2012), Best Mobile Application." Confirm the exact Lion and category name as listed by Cannes Lions. | `Education.jsx`, `Projects.jsx` | Keep, flag in PR |
| D10 | **Contact email domain.** Email is `brandon@navigatenow.com`, Navigate links go to `letsnavigatenow.com` and `navigatenow.com`. Confirm the canonical domain and inbox. | `ContactIntake.jsx`, `Hero.jsx`, `Footer.jsx`, `Projects.jsx` | Keep email, use `letsnavigatenow.com` for links |
| D11 | **LinkedIn URL.** Contact uses `/in/brandonmweaver`, footer uses `/in/brandonweaver`. | `ContactIntake.jsx`, `Footer.jsx` | Use `/in/brandonmweaver` everywhere |

---

## 1. Diagnosis (what's wrong today)

### Bugs and broken things
1. **"PROFESSIONAL EXPERIENCE" heading is invisible.** It's styled `color: #000` on a black background (`Projects.jsx`). The single most important section has no visible title.
2. **Contact form always reports success.** It posts to Formspree with `mode: 'no-cors'`, so the response is opaque and the error branch never runs. If Formspree is down or the form ID is wrong, the visitor sees "Thanks for reaching out!" and the lead is lost.
3. **No OG image, no favicon.** Every LinkedIn, iMessage and Slack share of the URL renders as a blank card. For someone whose brand is "connector," this is the most expensive bug on the site.
4. **Client-side rendering only.** The HTML shell is empty until JavaScript runs. Search engines and AI crawlers index a title and nothing else. All 27 pieces of writing are invisible to search.
5. **Dead code and assets.** `Contact.jsx` is never imported. `public/brandon-about.jpg` is never used. The headshot exists twice. The README describes "blue accents" and the wrong links.

### Design problems
1. **Length.** ~16,000px on desktop, ~30,000px on mobile. That is roughly 35 phone screens. Nobody reaches Education or Contact.
2. **No hierarchy.** Twelve sections, all styled identically: tiny gray eyebrow, giant tan serif title, gray paragraph, hairline divider. When everything is a headline, nothing is.
3. **Two type systems fighting.** The hero H1 is Inter Bold Italic. Every other heading is DM Serif Display. The first thing visitors see doesn't match anything else on the page.
4. **Palette drift.** Tan `#c8b99a`, a different gold `#c4975a` (scrollbar, selection), Tailwind `yellow-500` (mobile CTA, footer hover), purple `#a78bfa` (Navigate card), green success state. Five accents is four too many.
5. **Hero photo.** The white studio backdrop is faded to gray with a CSS gradient, so the left half of the page is a gray smear next to pure black. It looks like a cutout pasted onto the page.
6. **Gray-on-black body text.** Long-form copy is `gray-400` and `gray-500` at 14 to 18px on `#000`. The supporting hero line and section intros are `gray-500` and `gray-600`, which fail WCAG AA contrast.
7. **Logos are illegible.** Company logos render at 32px tall inside black chips, two of them dimmed with `brightness(0.6)`. Diageo, Sonder and Bonotel are your strongest proof and they're the smallest things on the page.
8. **Redundancy.** Aperture appears three times (Experience card, its own section, hero). The "About" story appears twice (`Many Rooms, One Frequency` and `A Leader with A Global Perspective`). "Right Now" repeats Navigate again.
9. **Thought leadership is a wall of 27 identical cards** linking out to Google Drive. No dates, no summaries, no featured pieces, and every click leaves the site for a Drive viewer.
10. **Media section has no media.** "Featured Podcasts & Media" contains zero thumbnails or embeds, and YouTube Shorts are labeled "Podcast."

### Copy problems
1. **Hero headline is three job titles, not a position.** "Experienced Operator, Connector & Growth Architect" could be anyone's LinkedIn headline. It doesn't say what you're better at than the next ex-Diageo MBA.
2. **Em dashes throughout** (About, ContactIntake, Differentiator, Education, RightNow, ThoughtLeadership). Brandon does not use em dashes. Replace with commas or full stops.
3. **Mixed spelling.** "modernisation," "optimise" alongside American spelling elsewhere. Standardize to American English.
4. **Wrong word.** "The *inertia* that comes from human connection" (Education.jsx). Inertia is resistance to motion. You mean momentum.
5. **Self-praise a skeptic will discount.** "a rare authenticity that stands out in a world of AI and artifice," "I didn't inherit a playbook. I wrote one." Proof beats adjectives. Let the numbers and the testimonials do this work.
6. **"Learn More"** as a hero CTA tells the visitor nothing.

---

## 2. Design direction

**Concept: "The Briefing."** The site should read like an FT Weekend profile or a Monocle feature, not a dark-mode SaaS template. Quiet luxury: warm paper, ink-black type, one accent, generous whitespace, real photography, numbers set like a financial report. This is the register of the brands Brandon has actually run (Johnnie Walker, Captain Morgan, luxury villas). Black-and-gold dark mode reads as crypto or nightclub; it's the default "premium" look and it's everywhere.

If Brandon prefers to stay dark, use the dark token set below. Same layout, same type, same rules. Build the theme with CSS variables so this is a one-line switch.

### 2.1 Tokens

Define in `src/styles/tokens.css` and map into `tailwind.config.js` `theme.extend.colors` via `var()`. Delete every hard-coded hex and every inline `style={{ color: ... }}` in components.

**Light (default, recommended)**
```css
:root {
  --paper:      #F5F1EA;  /* page background, warm ivory */
  --paper-2:    #ECE6DB;  /* cards, alternate bands */
  --ink:        #15130F;  /* primary text, headings */
  --ink-2:      #4A453D;  /* body text, AA on paper */
  --ink-3:      #7A7368;  /* meta, dates, captions (large text only) */
  --rule:       #D9D1C3;  /* hairlines */
  --accent:     #7A2E22;  /* oxblood, links + primary CTA */
  --accent-ink: #F5F1EA;  /* text on accent */
  --focus:      #B5532F;
}
```

**Dark (alternate)**
```css
:root[data-theme="dark"] {
  --paper:      #0E0D0B;
  --paper-2:    #191714;
  --ink:        #F2EDE4;
  --ink-2:      #BDB5A8;  /* replaces gray-400/500, passes AA */
  --ink-3:      #8C857A;
  --rule:       #2C2925;
  --accent:     #C8B99A;  /* keep the existing tan as the single accent */
  --accent-ink: #0E0D0B;
  --focus:      #E0CDA8;
}
```

One accent. No yellow, no purple, no green. Navigate's purple lives only inside a Navigate logo, never as a UI color. Form success/error states use `--ink` text with a left rule in `--accent`, not traffic-light colors.

### 2.2 Typography

- **Display and long-form:** `Newsreader` (Google Fonts, variable, has optical sizes and a true italic). Replaces DM Serif Display, which is overused and has no weights.
- **UI, labels, numbers:** `Inter` stays, but use `font-feature-settings: "tnum"` for all figures so stats and dates align.
- Self-host both with `@fontsource-variable/newsreader` and `@fontsource-variable/inter`. Remove the Google Fonts `<link>`.

Scale (fluid with `clamp`, mobile to desktop):
| Token | Use | Size |
|---|---|---|
| `display` | Hero H1 only | clamp(2.75rem, 6vw, 5.5rem), Newsreader 400, tracking -0.02em, line-height 1.02 |
| `h2` | Section titles | clamp(2rem, 3.5vw, 3rem), Newsreader 400 |
| `h3` | Company names, card titles | 1.5rem, Newsreader 500 |
| `lede` | Section intros, pull quotes | 1.25rem, Newsreader 400 italic, `--ink-2` |
| `body` | Paragraphs | 1.0625rem / 1.65, Inter 400, `--ink-2`, max-width 65ch |
| `label` | Eyebrows, dates, tags | 0.75rem, Inter 500, uppercase, tracking 0.12em, `--ink-3` |
| `stat` | Big numbers | clamp(2.5rem, 4vw, 3.5rem), Newsreader 300, tabular |

Rules: italics in headings are used for **one** word per page at most (the hero). Never bold inside body paragraphs more than once per section; the current About copy bolds half of every paragraph, which means nothing is emphasized.

### 2.3 Layout system

- Container: `max-w-[1200px]`, 24px gutters mobile, 48px desktop.
- 12-column grid on desktop. Section titles sit in columns 1 to 4, content in 5 to 12 (classic editorial left-rail). On mobile everything stacks.
- Vertical rhythm: sections `py-24 md:py-32`. Hairline `--rule` between sections, no full-width dividers inside sections.
- Corners: 2px radius on buttons and cards. The current `rounded-2xl` cards fight the editorial look.
- Motion: one subtle fade-up on section entry (`prefers-reduced-motion` respected). Remove `hover:scale-105` on buttons.

### 2.4 Components

- **Button primary:** `--accent` fill, `--accent-ink` text, 2px radius, 48px tall, Inter 500. **Secondary:** text link with arrow and underline offset, not an outlined box.
- **Logo strip:** monochrome logos (`filter: grayscale(1)` plus opacity 0.7, full color on hover), 28 to 36px tall, evenly spaced, no background chips. Sources: Diageo, Sonder, Bonotel, Lacure, Compass. Add Stillhouse when D6 is confirmed.
- **Stat block:** number in `stat` style, label underneath in `label` style, separated by vertical hairlines, no gold boxes.
- **Experience row:** left column = years (label style) and logo; right column = company (h3), role (italic lede), 2 to 3 bullets max, plus a "Details" disclosure (`<details>`) for the rest.
- **Writing card:** type label, title (h3), one-line summary, year. No borders; separated by hairlines in a list.
- **Testimonial:** large Newsreader italic quote, cut to the strongest 1 to 2 sentences, name and title in label style.

---

## 3. Information architecture

Cut the homepage from 12 sections to 8 and move long content to subpages. Target: under 6,000px on desktop.

**Navigation:** `Work` · `Writing` · `About` · `Contact` (button). Name on the left in Newsreader, not bold Inter.

### Homepage, in order

1. **Hero** (100vh max, often less)
   - Left (cols 1 to 6): eyebrow `Founder · Operator · Advisor`, H1, one sentence of support, primary CTA "Work with Aperture" (or per D1), secondary text link "See the track record →".
   - Right (cols 7 to 12): headshot, re-cropped and background-removed or placed on a `--paper-2` panel. No CSS gradient fade.
   - Below the fold line: the logo strip.
   - H1 options (Brandon to choose, or write his own):
     - "I build the commercial engine behind hospitality, luxury and real estate brands."
     - "Twenty years turning strong brands into stronger P&Ls."
     - "Operator first. Connector always."
2. **Proof bar:** the four stats (subject to D7), then three testimonials directly underneath. Testimonials move up from the bottom of Experience because third-party proof belongs next to first-party claims.
3. **Now:** two side-by-side cards, **Aperture Hospitality** and **Navigate**, each with logo, one-paragraph description, role, and one CTA. This replaces the Aperture section, the "Discover Navigate" card, and the "Right Now" section.
4. **Track record:** condensed experience timeline. Seven roles (plus Stillhouse/BLKBOX per D6), each with max 3 bullets visible and the rest behind "Details." Full version lives at `/work`.
5. **How I think:** the three principles, kept, in a 3-column grid. One pull quote below. Fix the em dash in principle 02.
6. **Writing & media:** three featured pieces (Brandon picks; default to "SaaS Isn't Dead," "The Hotel Exists Before The Opening," "Brand-to-Demand"), one embedded YouTube video (lite-youtube-embed, not an iframe on load), and a link to `/writing`.
7. **About, short:** one photo (use the unused `brandon-about.jpg`), 150 words max, merged from the two existing essays, education as a single line: *Kellogg MBA · Harvard Kennedy School MPA · USC Annenberg BA*. "Read the full story →" links to `/about`.
8. **Contact:** form left, direct channels right. Keep the industry dropdown. Footer below.

### Subpages
- `/work`: full experience with every bullet, advisory roles, awards.
- `/writing`: all 27 pieces, filterable by the existing five categories (Sales Strategy, Lessons in Luxury, Marketing Strategy, Leadership, AI Strategy), sorted newest first. Each entry gets a date and a one-line summary (Brandon to supply, otherwise leave `TODO`).
- `/about`: the full "Many Rooms, One Frequency" essay, edited (see section 5), plus education detail and interests.

---

## 4. Technical changes

1. **Migrate to Astro** (`astro` + `@astrojs/tailwind` + `@astrojs/react` only if an island truly needs React; the mobile menu and contact form can be vanilla or tiny islands). Reason: this is a content site. Astro ships static HTML, so crawlers, LinkedIn previews and AI search can read it, and writing can live in content collections. Keep Tailwind. Keep `lucide` icons via `lucide-astro`.
   - If Brandon vetoes the migration, the fallback is to stay on Vite and add `vite-plugin-ssg` or `vite-react-ssg` prerendering. Do not leave it client-rendered.
2. **Writing as content collection:** `src/content/writing/*.md` with frontmatter `title, type, category, date, summary, url, featured`. Phase 1 keeps the Drive URLs. Phase 2 (separate PR) converts the featured pieces into on-site articles.
3. **Contact form:** remove `mode: 'no-cors'`. POST JSON to Formspree with `Accept: application/json`, check `response.ok`, show a real error state with the mailto fallback. Add a honeypot field. Disable the button while submitting. Label every input with `for`/`id`.
4. **SEO and sharing:**
   - Per-page `<title>`, meta description, canonical URL.
   - OG image 1200x630 (name, one-line positioning, headshot, on `--paper`). Generate statically with `@vercel/og` or Satori at build.
   - Favicon set: SVG monogram "BW" in Newsreader on `--accent`, plus `apple-touch-icon.png`.
   - JSON-LD `Person` schema with `sameAs` (LinkedIn, Instagram, YouTube), `alumniOf`, `worksFor` (Aperture Hospitality, Navigate).
   - `sitemap.xml` and `robots.txt` via `@astrojs/sitemap`.
5. **Images:** use Astro `<Image>` (AVIF/WebP, responsive `srcset`). Headshot under 120KB. Logos as SVG where obtainable, otherwise trimmed transparent PNG at 2x. Delete duplicates and unused files.
6. **Accessibility:** all text pairs pass WCAG AA (check with `axe` or Lighthouse). Visible focus rings using `--focus`. Mobile menu button gets `aria-expanded` and `aria-controls`, closes on Escape. Skip-to-content link. Logos have meaningful `alt` text.
7. **Analytics:** add `@vercel/analytics` and `@vercel/speed-insights`.
8. **Housekeeping:** rewrite README to describe the actual stack and design system. Remove `GOOGLE_SHEETS_SETUP.md` if the Sheets integration isn't used (the form posts to Formspree). Remove the "rebuild trigger" comments in `main.jsx` and `index.css`.

---

## 5. Copy edits to apply

Apply globally:
- Replace every em dash with a comma or full stop. Search for `—` and `&mdash;`.
- American English: modernisation → modernization, optimise → optimize, and so on.
- "inertia" → "momentum" (Education.jsx, final essay).
- Bold no more than one phrase per section of body copy.

Hero support line (replace the current 50-word paragraph):
> 20+ years building revenue across spirits, luxury hospitality and real estate technology. Diageo, Bonotel, Sonder, Lacure. Now running Aperture Hospitality and Navigate.

Cut outright:
- "I didn't inherit a playbook. I wrote one."
- "a rare authenticity that stands out in a world of AI and artifice"
- "Not resting on past successes" (Right Now intro)
- The infinity box ("Experience Forged Across Industry...")

"Learn More" → "See the track record".
"Connect With Brandon" (nav) → "Contact".
"Send Request" → "Send".

---

## 6. Acceptance criteria

The preview deployment is ready for Brandon's review when all of these are true:

- [ ] Every item in section 0 is either resolved or listed in the PR description as a `TODO` for Brandon.
- [ ] Homepage under 6,000px tall at 1440px wide.
- [ ] Lighthouse mobile: Performance ≥ 95, Accessibility 100, Best Practices ≥ 95, SEO 100.
- [ ] `curl -s https://<preview-url>/ | grep -c "Diageo"` returns ≥ 1 (content is in the HTML, not injected by JS).
- [ ] Sharing the preview URL in the LinkedIn Post Inspector shows title, description and OG image.
- [ ] Contact form: a submission with Formspree blocked shows an error, not a thank-you.
- [ ] Zero em dashes in rendered text.
- [ ] No hex colors in component files; all colors come from tokens.
- [ ] Tested at 375px, 768px, 1440px. No horizontal scroll at any width.
- [ ] Screenshots of the homepage at 390px and 1440px attached to the PR.

---

## 7. Deploy

1. `git checkout -b redesign`
2. Build in small, reviewable commits: tokens and fonts → layout shell and nav → each homepage section → subpages → SEO/OG → form fix → cleanup.
3. Push the branch. Vercel creates a Preview URL automatically for the Git-connected project. Post the URL.
4. Do **not** merge to `main` until Brandon approves. Merging to `main` triggers the production deploy to brandonmweaver.com.
5. After merge, verify production with the acceptance checks above and the LinkedIn Post Inspector.

---

## Prompt to paste into Claude Code

```
Read DESIGN_BRIEF.md at the repo root. Start by listing every item in section 0
and ask me to confirm or correct each one before writing code. Then execute the
brief on a branch called `redesign`, commit in the order given in section 7,
push the branch, and give me the Vercel preview URL plus mobile and desktop
screenshots. Do not merge to main.
```

# Brandon Weaver - Personal Portfolio

A modern, minimalist personal portfolio website for Brandon Weaver, Founder at Navigate.

## Features

- ✨ **Modern Design** - Clean, minimal aesthetic with smooth animations
- 🎨 **Dark Theme** - Professional dark mode with blue accents
- 📱 **Responsive** - Mobile, tablet, and desktop optimized
- ⚡ **Fast** - Built with React + Vite for optimal performance
- 🎯 **Smooth Scrolling** - Native smooth scroll behavior with anchor navigation
- 🌐 **SEO Ready** - Proper meta tags and semantic HTML
- 🚀 **Deploy Ready** - Easy to deploy to Vercel, Netlify, or any static host

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Deployment**: Vercel / Netlify ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repo
cd personal-website

# Install dependencies
npm install
```

### Development

```bash
# Start the dev server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
# Build the project
npm run build

# Preview the build locally
npm run preview
```

The built files will be in the `dist/` folder.

## Project Structure

```
personal-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Sections

- **Hero** - Eye-catching introduction with CTA buttons
- **About** - Background and focus areas
- **Projects** - Showcase of main work (Navigate)
- **Contact** - Multiple ways to get in touch
- **Footer** - Links and copyright

## Customization

### Colors

Edit `tailwind.config.js` to change the color scheme. The primary gradient uses blue to cyan.

### Content

Update the component files in `src/components/` to customize:
- Bio and descriptions in `About.jsx`
- Project details in `Projects.jsx`
- Contact methods in `Contact.jsx`

### Social Links

Update the social links in:
- `Contact.jsx` - Contact card links
- `Footer.jsx` - Footer social links

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir dist
```

### GitHub Pages

1. Update `vite.config.js` with your repo name as `base`
2. Build: `npm run build`
3. Push `dist/` folder to `gh-pages` branch

## Performance

- **Lighthouse**: Optimized for performance, accessibility, and SEO
- **Bundle Size**: ~45kb gzipped (with dependencies)
- **Load Time**: <1s on 3G connection

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT - Feel free to fork and customize for your own portfolio

## Author

Brandon Weaver
- Website: https://navigatenow.com
- Email: brandon@navigatenow.com
- LinkedIn: linkedin.com/in/brandonweaver
- Twitter: twitter.com/brandonweaver

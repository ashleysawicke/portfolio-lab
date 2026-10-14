# Ashley Sawicke · portfolio-lab

A small, independent portfolio experiment for **Ashley Sawicke**. Built from scratch with Next.js, React, TypeScript, and Tailwind CSS; visually inspired by screenshots of the minimalist [ad1tya.me](https://ad1tya.me) portfolio and its compact terminal-inspired design. The original website's private code was **not** copied. The previously forked public repository had a different design.

## Run locally

Node.js 20+ recommended.

```bash
npm install
npm run dev
```

Then visit **http://localhost:3000**. To verify a production build, run `npm run build`.

### Theme

- White light mode **by default**, with no graph/grid-paper background.
- Forest-green dark mode with a subtle square grid and green digital accents.
- Only **light and dark**; selection is remembered locally.

### Sections and features

- Responsive rounded navigation, contact and profile links
- Decorative animated digital frequency visualizer
- Compact two-column hero with original green halftone illustration placeholder
- About, two education/interest cards, collapsible professional experience
- Skills/toolbox and expandable featured projects (4 initially, 6 total)
- Résumé summary and browser print/save-to-PDF control
- Personal writing placeholder and astronomy feature linking to NASA APOD
- Contact form that **opens your email app** (no backend, no fake message sending)
- Reduced-motion and keyboard accessibility support

### Personalize next

Replace `/public/portrait-signal.svg` with a real portrait (with permission) once one is available. Add public project/demo URLs and approved screenshots. Expand the blog into posts. Review copy before publishing.

Contact email: **asawicke@gmail.com**  
GitHub: **ashleysawicke**

> This is the lab repository, **not** the live `ashleysawicke.github.io` site. Nothing is automatically published from this project. If you later deploy through Vercel, you can connect this repo to that project, or export a static build after configuring Next.js appropriately.

# Samuel Omolaja — Portfolio

Personal portfolio of **Samuel Omolaja**, a backend-focused full-stack engineer (Java, Spring Boot, Node.js, Kafka, AWS).

Built with React 19, Vite 6 and Tailwind CSS 4 as a single-page site.

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build to dist/
npm run preview   # serve the production build
npm run lint
```

### Contact form

The contact form sends mail through [EmailJS](https://www.emailjs.com/). To use your own account, copy `.env.example` to `.env.local` and set:

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

The template should accept `name`, `email`, `title` and `message` fields.

## Project structure

```
src/
├── data/            # All site content — edit these to update the portfolio
│   ├── profile.js   #   name, bio, contact details, socials, headline metrics
│   ├── experience.js
│   ├── projects.js
│   ├── skills.js
│   ├── services.js
│   ├── education.js
│   └── navigation.js
├── sections/        # One component per page section (Hero, About, Experience, …)
├── components/
│   ├── layout/      # Navbar, Footer
│   ├── ui/          # Reusable primitives: Section, Button, Tag, Reveal, TerminalWindow
│   ├── ContactForm.jsx
│   └── SocialLinks.jsx
├── hooks/           # useTypewriter, useActiveSection, useInView, usePrefersReducedMotion
├── config/          # Third-party config (EmailJS)
├── lib/             # Small utilities
└── index.css        # Tailwind import + design tokens (@theme)
```

Content and presentation are separated: updating experience, skills or contact details only requires editing files in `src/data/`.

The CV served by the "Download CV" buttons lives at `public/Samuel_Omolaja.pdf`.

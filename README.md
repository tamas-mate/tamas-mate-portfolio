# Tamás Máté Portfolio

A fast, multi-language portfolio built with **Vite + React + Tailwind CSS (v4)**.  
It showcases projects, skills, and contact options with a focus on **performance**, **accessibility**, and **clean DX**.

**Repo:** [https://github.com/tamas-mate/tamas-mate-portfolio](https://github.com/tamas-mate/tamas-mate-portfolio)

---

## ✨ Features

- **Fast & modern stack:** Vite + React 19 + Tailwind v4
- **Dark / Light theme:** CSS variables with `html.dark` toggle
- **Internationalization:** `i18next` + `react-i18next` (EN/RO/HU)
- **Contact form:** EmailJS + reCAPTCHA (v2) for spam protection
- **Toasts & UX feedback:** `react-toastify` with theme-aware colors
- **Data fetching & caching:** `@tanstack/react-query`
- **Image/gallery/slider:** `swiper`
- **Sticky section nav:** `react-scrollspy-navigation`
- **Hosted data:** Supabase SDK for data storage
- **Code style & formatting:** Prettier

---

## 🧱 Tech Stack

- **Core:** `react`, `react-dom`, `vite`, `tailwindcss`
- **Styling:** Tailwind v4 (`@tailwindcss/vite`), CSS variables via `@theme`
- **i18n:** `i18next`, `react-i18next`
- **Forms & Email:** `@emailjs/browser`, `react-google-recaptcha`
- **Data:** `@tanstack/react-query`, `@supabase/supabase-js`
- **UI/UX:** `react-toastify`, `swiper`, `react-scrollspy-navigation`
- **Tooling:** `prettier`

---

## 🏁 Getting Started

### Prerequisites

- Node 18+ (LTS recommended)
- A package manager (pnpm recommended, npm, yarn)

### Install

```bash
pnpm install
```

### Dev

```bash
pnpm run dev
```

### Build & Preview

```bash
pnpm run build
pnpm run preview
```

---

## ⚙️ Environment Variables

Create a `.env.local` file in the project root (Vite reads VITE\_-prefixed vars):

```bash
# Supabase (https://supabase.com/)
VITE_SUPABASE_URL=<supabase_url>
VITE_SUPABASE_PUBLISHABLE_KEY=<supabase_publishable_key>
# Google reCAPTCHA (https://www.google.com/recaptcha/admin)
VITE_RECAPTCHA_SITE_KEY=<reCAPTCHA_site_key>
# EmailJS (https://www.emailjs.com/)
VITE_EMAILJS_PUBLIC_KEY=<emailJS_public_key>
```

💡 Never commit .env files! Use environment variables in your hosting platform.

## 🚀 Deployment on Vercel

- link project repo with Vercel
- set environment variables in project settings
- modify or leave basic framework settings
- deploy

## 📄 License

MIT © Tamás Máté

## 📬 Contact

- Website: [https://tamas-mate-portfolio.vercel.app/](https://tamas-mate-portfolio.vercel.app/)
- Email: `tamasmate.dev@gmail.com`
- GitHub: [https://github.com/tamas-mate](https://github.com/tamas-mate)

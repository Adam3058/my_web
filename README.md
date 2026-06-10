# Adam Hamba — Professional Portfolio

> **Python Developer · Embedded Systems Engineer · IoT Enthusiast**  
> Built with React + Vite · Tailwind CSS · Framer Motion

[![Live Demo](https://img.shields.io/badge/Live-Demo-3b82f6?style=for-the-badge&logo=netlify)](https://your-site.netlify.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)

---

## ✨ Features

| Feature | Details |
|---|---|
| 🎨 Dark futuristic UI | Glassmorphism cards, gradient text, glow effects |
| 🌐 Particle background | Canvas-based network that reacts to mouse movement |
| 🖱️ Custom cursor | Animated dot + ring, morphs on hover |
| ⌨️ Typing animation | Cycles through role titles with realistic typing |
| 📸 Photo upload | Click/drag-and-drop profile photo in-browser |
| 📜 Scroll progress bar | Thin gradient bar at top of viewport |
| 🔢 Section reveal | Framer Motion animate-on-scroll for every section |
| 🧭 Smart navbar | Active section highlighting, mobile hamburger menu |
| ✉️ Contact form | EmailJS — sends real email, no backend needed |
| 📱 Fully responsive | Mobile · Tablet · Desktop |
| ♿ Accessible | Semantic HTML, focus rings, aria-labels |
| ⚡ Fast | Vite build — ~100KB gzipped JS |

---

## 🗂️ Project Structure

```
my_web/
├── public/
│   ├── favicon.svg
│   ├── profile.jpg          ← place your photo here
│   └── Adam_Hamba_CV.pdf    ← place your CV here
│
├── src/
│   ├── components/
│   │   ├── CustomCursor.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── Navbar.jsx
│   │   ├── ParticleBackground.jsx
│   │   ├── ProfilePhoto.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── SectionTitle.jsx
│   │   └── SectionWrapper.jsx
│   │
│   ├── data/
│   │   └── portfolioData.js  ← ✏️ edit ALL your content here
│   │
│   ├── hooks/
│   │   ├── useActiveSection.js
│   │   ├── useScrollProgress.js
│   │   └── useTypingEffect.js
│   │
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Certifications.jsx
│   │   ├── Services.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🚀 Running Locally

### Prerequisites
- [Node.js](https://nodejs.org) v18 or higher
- npm (comes with Node.js)

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Open **http://localhost:5173** in your browser.  
The page hot-reloads every time you save a file.

### Other commands

```bash
npm run build    # Production build → outputs to dist/
npm run preview  # Preview the production build locally
```

---

## ✏️ Customization

### 1. Edit your content — one file does everything

Open `src/data/portfolioData.js` and update:

```js
export const personalInfo = {
  name:     'Your Name',
  email:    'you@example.com',
  github:   'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  telegram: 'https://t.me/yourusername',
  photo:    '/profile.jpg',   // or null for placeholder
  cvUrl:    '/YourCV.pdf',
}
```

Everything else — skills, projects, experience, certifications, services — is in that same file.

### 2. Add your profile photo

**Option A — File:**
1. Drop your photo into the `public/` folder (e.g. `public/profile.jpg`)
2. Set `photo: '/profile.jpg'` in `portfolioData.js`

**Option B — In-browser upload (owner-only in production):**
- The upload UI appears when running locally (`npm run dev`). In production it is hidden for visitors by default.
- To enable uploads on your live site for *only you*, set a build-time secret named `VITE_EDIT_KEY` in your hosting environment (Netlify/Vercel) and visit your site with the matching query param, for example: `https://your-site.netlify.app?edit=mysupersecret`.

Example local `.env` (do NOT commit this file):
```bash
VITE_EDIT_KEY=mysupersecret
```

- After deploying with the secret present, open the site with `?edit=...` to reveal the upload controls. A downloaded copy of any uploaded image is available so you can replace the static file in `public/`.
- Important: the in-browser upload stores the image in *your browser's localStorage only* — visitors will not see that change. To make the image visible to everyone, download the uploaded image (owner mode) and place it in `public/profile.jpg`, then set `photo: '/profile.jpg'` in `src/data/portfolioData.js` and redeploy.

### 3. Add your CV

Drop your PDF into `public/` and update `cvUrl` in `portfolioData.js`:
```js
cvUrl: '/Adam_Hamba_CV.pdf',
```

### 4. Set up the Contact Form (EmailJS)

1. Create a free account at **https://emailjs.com**
2. Add an Email Service (Gmail recommended)
3. Create an Email Template — use these variables:
   ```
   From: {{name}} <{{email}}>
   Subject: {{subject}}
   Message: {{message}}
   ```
4. Copy your credentials into `src/sections/Contact.jsx`:
   ```js
   const SVC  = 'your_service_id'
   const TMPL = 'your_template_id'
   const KEY  = 'your_public_key'
   ```

Free tier: **200 emails/month** — more than enough for a portfolio.

### 5. Change accent color

In `tailwind.config.js` and the inline styles the main blue is `#3b82f6`.  
To switch to a different color (e.g. purple `#8b5cf6`), use VS Code's global find-and-replace:
- Find: `59,130,246` → Replace: `139,92,246`
- Find: `#3b82f6` → Replace: `#8b5cf6`

---

## 🌍 Hosting for Free

There are three great free options. **Netlify** is recommended — the fastest setup.

---

### ✅ Option 1 — Netlify (Recommended)

**Method A: Drag & Drop — no account needed for code**

```bash
# Build the project first
npm run build
```

1. Go to **https://app.netlify.com/drop**
2. Drag the `dist/` folder onto the page
3. You get a live URL instantly — e.g. `https://rainbow-unicorn-123.netlify.app`
4. Optional: click "Site settings" → "Change site name" to get a cleaner URL

**Method B: Connect to GitHub — auto-deploys on every push**

```bash
# Push your project to GitHub first
git init
git add .
git commit -m "initial portfolio"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

Then:
1. Go to **https://netlify.com** → "Add new site" → "Import an existing project"
2. Connect GitHub → select your repo
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy** — done!

Every `git push` auto-redeploys. Free custom domain available.

---

### Option 2 — Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy (run from project folder)
vercel

# Follow the prompts — takes about 60 seconds
# Your site is live at something like: https://adam-portfolio.vercel.app
```

Or connect via GitHub at **https://vercel.com/new** — same as Netlify method B.

**Free tier:** Unlimited personal projects, 100GB bandwidth/month.

---

### Option 3 — GitHub Pages

```bash
# Install the gh-pages helper
npm install --save-dev gh-pages
```

Add to `package.json` scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

Add to `vite.config.js` (replace `portfolio` with your repo name):
```js
export default defineConfig({
  base: '/portfolio/',   // ← add this line
  plugins: [react()],
})
```

Then deploy:
```bash
npm run deploy
```

Live at: `https://yourusername.github.io/portfolio/`

**Note:** GitHub Pages is slightly more setup than Netlify/Vercel, but it's 100% free forever.

---

## 🔗 Custom Domain (Free with Netlify)

1. Buy a domain from [Namecheap](https://namecheap.com) (~$10/year) or get a free `.is-a.dev` subdomain
2. In Netlify: Site settings → Domain management → Add custom domain
3. Update the DNS nameservers as instructed — live in ~5 minutes

---

## 📋 Pre-Launch Checklist

Before sharing your portfolio link, make sure:

- [ ] Updated `personalInfo` in `portfolioData.js` with real links
- [ ] Added real profile photo to `public/`
- [ ] Added your CV PDF to `public/`
- [ ] Set up EmailJS and tested the contact form
- [ ] Updated GitHub links in project cards
- [ ] Ran `npm run build` — no errors
- [ ] Tested on mobile (Chrome DevTools → Responsive mode)
- [ ] Tested in Firefox and Safari
- [ ] Ran Lighthouse audit (DevTools → Lighthouse tab) — aim for 90+ on all

---

## 🛠️ Tech Stack

| Package | Version | Purpose |
|---|---|---|
| React | 18.2 | UI framework |
| Vite | 5.2 | Build tool & dev server |
| Framer Motion | 11 | Animations |
| Tailwind CSS | 3.4 | Utility styling |
| Lucide React | 0.363 | Icons |
| @emailjs/browser | 4.3 | Contact form email |

---

## 📄 License

MIT — free to use, modify, and deploy for personal portfolios.  
Credit appreciated but not required.

---

<p align="center">Made with ❤️ by Adam Hamba — Addis Ababa, Ethiopia</p>
"# my_web" 

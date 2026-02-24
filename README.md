# Satish Krishna — Portfolio Website

Modern React portfolio using **CSS Flexbox** for all layouts. Dark theme with electric yellow accent.

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       — Fixed nav (flex: space-between)
│   │   ├── Hero.jsx         — Full-screen hero (flex-col)
│   │   ├── Skills.jsx       — Skill cards (flex-wrap)
│   │   ├── Experience.jsx   — Timeline cards (flex-col)
│   │   └── Contact.jsx      — Contact + Certs + Footer
│   ├── styles/
│   │   ├── global.css       — CSS vars, flexbox utils, animations
│   │   ├── Navbar.css       — Navbar flexbox layout
│   │   ├── Hero.css         — Hero flexbox layout
│   │   ├── Skills.css       — Skills flex-wrap grid
│   │   ├── Experience.css   — Timeline flex layout
│   │   └── Contact.css      — Contact, certs & footer flex
│   ├── App.jsx
│   └── index.js
├── render.yaml              — Render.com deploy config
└── package.json
```

## 🚀 Run Locally

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
```

---

## 🌐 Deploy on Render (Step-by-Step)

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/satish-portfolio.git
git push -u origin main
```

### Step 2 — Create Account
Go to [https://render.com](https://render.com) → Sign up → Connect GitHub

### Step 3 — New Static Site
1. Click **New +** → **Static Site**
2. Select your repo
3. Settings:
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `build`
4. Click **Create Static Site**

### Step 4 — Done! 🎉
You'll get a live URL like: `https://satish-portfolio.onrender.com`

Auto-deploys on every `git push` to main!

---

## 🎨 Flexbox Usage Map

| Section       | Flexbox Property                        |
|---------------|-----------------------------------------|
| Navbar        | `justify-content: space-between`        |
| Hero Content  | `flex-direction: column`                |
| Hero Actions  | `flex-direction: row`, `gap: 20px`      |
| Hero Stats    | `flex-direction: row`, `gap: 52px`      |
| Skills Grid   | `flex-wrap: wrap`, `flex: 1 1 240px`   |
| Skill Tags    | `flex-wrap: wrap`, `gap: 5px`           |
| Timeline Card | `flex-direction: column`, `gap: 8px`   |
| Cert Cards    | `flex-wrap: wrap`, `flex: 1 1 200px`   |
| Contact Box   | `flex-direction: column`, `align-items: center` |
| Footer        | `justify-content: space-between`        |

## 🔧 Customization

- **Colors:** Edit `:root` in `src/styles/global.css`
- **Skills:** Update `SKILLS` array in `src/components/Skills.jsx`
- **Experience:** Update `EXPERIENCES` array in `src/components/Experience.jsx`
- **Contact:** Update links in `src/components/Contact.jsx`

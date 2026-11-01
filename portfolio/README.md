# Varshitha Vangara: Developer Portfolio

A responsive portfolio built with React, Vite and plain CSS. No UI libraries. It features the **Foodwala** online food ordering application as a full case study.

## Before you publish: fill in the placeholders

The resume provided had its contact details removed, so these are **placeholders**. Nothing links anywhere until you add them.

1. Open `src/data/content.js`.
2. Set `contact.email`, `contact.linkedin` and `contact.github`.
3. When your Foodwala repository exists, set `foodwala.repoUrl`. Leave `demoUrl` empty unless it is really deployed.
4. Replace `public/resume/Varshitha_Vangara_Resume.pdf` with the version of your resume that includes your phone, email and links (keep the file name).
5. Add real screenshots to `public/screenshots/` using the names shown in the Screenshots section (`foodwala-menu.jpg`, `foodwala-cart.jpg`, `foodwala-login.jpg`), then set `src` for each in `content.js`, for example `src: 'screenshots/foodwala-menu.jpg'` with an `alt` text.

Placeholders are visibly marked on the page so they can't be missed.

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the production build locally
```

## Project structure

```
public/            resume PDF, screenshots, favicon
src/data/content.js   all text and links (edit here)
src/components/       Navbar, Hero, About, Skills, Projects, Education,
                      Certifications, Contact, Footer, Section, Socials, Icons
src/styles/index.css  design tokens and all styles
```

## Contact form

The form validates name, email and message. Without a backend it cannot send mail, so a valid submission opens the visitor's email app (`mailto:`) with the message filled in, and the page says so. To send messages directly, connect a service such as Formspree or Netlify Forms later.

## Deploy

### Netlify
1. Push the project to GitHub (below).
2. In Netlify choose **Add new site, Import an existing project**, and pick the repository.
3. Build command `npm run build`, publish directory `dist`. Deploy.

(Quick option: run `npm run build` and drag the `dist` folder onto app.netlify.com/drop.)

### Vercel
1. Push to GitHub.
2. In Vercel choose **Add New, Project** and import the repository.
3. Vercel detects Vite automatically (build `npm run build`, output `dist`). Deploy.

Once deployed, add the live URL to your resume, LinkedIn and GitHub profile.

## Upload to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Create the empty repository on github.com first (no README). If you host on GitHub Pages under `/<repo-name>/`, set `base: '/<repo-name>/'` in `vite.config.js`.

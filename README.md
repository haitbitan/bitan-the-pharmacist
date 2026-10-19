# Bitan Hait — The Pharmacist

A beginner-friendly portfolio built to look like a streaming series. Every section is an episode, every project is an Original, and the site plays like a show you can browse.

> This is a personal project with a streaming-platform theme. It is not affiliated with Netflix or any other streaming service and uses none of their logos.

## What is this?

This is a portfolio website — a personal page that shows who you are, what you've built, and how to contact you. It was made with React (a tool for building websites) and Vite (a tool that bundles your code so it loads fast).

## Run it on your computer

You need **Node.js** installed (version 18 or newer). Download it from https://nodejs.org/ if you don't have it.

Open your terminal in this folder and run:

```bash
npm install
npm run dev
```

This installs the project's tools and starts a local website on your computer (usually at http://localhost:5173). Open that link in your browser to see the site.

To build the site for the internet:

```bash
npm run build
npm run preview
```

`npm run build` creates a `dist/` folder with the finished website. `npm run preview` lets you check that build locally before putting it online.

## Putting it online (hosting)

The `dist/` folder is a static website — you can host it for free on:

- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- Any static site host

Connect your GitHub repo, set the build command to `npm run build`, and set the output folder to `dist`.

## Changing the content

Almost everything on the site lives in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts). Edit that file to change your info, then rebuild and redeploy.

| To change… | Edit |
| --- | --- |
| Your name, intro, email, LinkedIn, GitHub | `profile` |
| A project (or add a new one) | `projects` |
| Achievements / certifications | `achievements`, `certifications` |
| Skills and where you've used them | `skillCategories`, `skillEvidence` |
| Your journey (seasons and episodes) | `seasons` |
| Top 10 row | `topPicks` |
| Intro highlight reel | `introSlides` |
| Profile order | `viewerProfiles` |
| Opening studio card text | `profile.originalLabel` |

**Resume:** replace `public/assets/Bitan_Hait_Resume.pdf` with your own PDF.

**Photo:** replace `pic1.jpeg` (your photo) and `pic.png` (background-removed cutout), then run:

```bash
npm run images
```

This makes smaller, web-friendly versions of your images.

## What's inside

```
src/
  data/portfolio.ts   ← all your content in one file
  App.tsx             ← main app: opening → pick profile → home page
  components/
    OpeningSequence   ← the intro animation that plays first
    ProfileSelector   ← lets viewers choose a profile view
    Navbar            ← top navigation bar
    Hero              ← big banner at the top of the home page
    PlayIntro         ← the highlight reel player
    ContinueWatching  ← cards showing progress on projects
    About             ← "The Pilot" — about you
    Seasons / EpisodeCard ← your journey as seasons and episodes
    Originals / ProjectCard ← your projects
    ProjectModal      ← full-screen project details
    TopPicks          ← top 10 style row
    Skills            ← your skills with examples
    Achievements      ← awards and certifications
    ResumeViewer/ResumeModal ← your resume viewer and download
    FinalCTA          ← "to be continued" + contact links
    CustomCursor, fx.tsx ← visual effects (cursor, tilt, particles)
  hooks/              ← smooth scrolling and media helpers
scripts/build-images.mjs ← script that prepares your images
```

**Tools used:** React 18, TypeScript, Vite 6, Tailwind CSS 4, Framer Motion 11, Lenis.

## Making it easier to use

- If you prefer less motion, the site respects your "reduce motion" setting and turns off animations.
- On touch devices, you get tap-friendly controls instead of hover effects.
- Overlays close with the **Esc** key.
- In the intro reel: **Space** pauses, **← →** changes slides, **Esc** closes.

## Keyboard shortcuts

- **Opening:** Press **Enter** or **Esc** to skip the intro.
- **Intro reel:** **Space** pauses, **← →** moves between slides, **Esc** closes.
- **Project / resume overlays:** **Esc** closes.

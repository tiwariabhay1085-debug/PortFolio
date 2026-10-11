# Abhay Tiwari: Developer Portfolio

Next.js (App Router), TypeScript, Tailwind CSS, Lucide React, and Motion. Dark theme by default with a light/dark toggle that is remembered between visits.

## 1. Run it locally in VS Code

1. Install Node.js 20 or newer from https://nodejs.org and VS Code from https://code.visualstudio.com.
2. Unzip the project and open the folder in VS Code (File > Open Folder).
3. Open the built-in terminal (Terminal > New Terminal) and run:

```bash
npm install
npm run dev
```

4. Open http://localhost:3000. The page reloads when you save a file.

Useful commands: `npm run build` (production build, run this before deploying) and `npm start` (serve the production build).

Recommended VS Code extensions: Tailwind CSS IntelliSense, ESLint (optional), Prettier.

## 2. Where to edit things

Everything personal lives in `data/`. You rarely need to touch components.

| File | What it controls |
| --- | --- |
| `data/site.ts` | Name, email, GitHub and LinkedIn URLs, resume path, profile image, hero text and roles, "Open to Opportunities" badge, contact form endpoint, SEO text |
| `data/about.ts` | About paragraphs, interest rows, optional stats |
| `data/skills.ts` | Skill categories, icons, and proficiency labels |
| `data/projects.ts` | Project text, status, technologies, features, repository and demo URLs, screenshots |
| `data/education.ts` | College, degree, branch, graduation year, score, coursework |
| `data/experience.ts` | Internships, certifications, hackathons, achievements, workshops |
| `data/exploring.ts` | "Currently exploring" topics |
| `app/globals.css` | Theme colors (CSS variables at the top) |

## 3. Replace the profile image

1. Put your photo in `public/images/`, for example `profile.jpg` (a portrait around 480 x 560 px works well).
2. In `data/site.ts`, change `profileImage.src` to `"/images/profile.jpg"` and update `alt`, `width`, and `height` to match.

## 4. Add your resume

Replace `public/resume.pdf` with your own file and keep the same name. The "Download Resume" button then downloads it. To use a different filename, change `resume.path` and `resume.downloadName` in `data/site.ts`.

## 5. Add real links

- **GitHub and LinkedIn:** set `github` and `linkedin` in `data/site.ts` to your full profile URLs. Until you do, they point to the sites' home pages.
- **Email:** set `email` in `data/site.ts`.
- **Project links:** in `data/projects.ts`, fill `repoUrl` and `demoUrl` for each project. While a value is `""`, its button is hidden, so the site never links to something that does not exist.
- **Screenshots:** copy images into `public/images/` and add `{ src: "/images/shot.png", alt: "Describe the screenshot" }` to a project's `screenshots` array. They appear in the "View Project" dialog.
- **Site URL:** set `url` in `data/site.ts` to your Vercel address after the first deploy so link previews use the right domain.

## 6. Keep the content honest

The sample content is a starting point. Please review it before publishing:

- **Skill labels** (`Learning`, `Working knowledge`, `Comfortable`) in `data/skills.ts` are placeholders. Set each to match your real experience.
- **Feature states** in `data/projects.ts` use `"done"`, `"building"`, or `"planned"`. Change each to match your actual progress. Set a project's `status` to `"Completed"` only when it is.
- **Education** shows bracketed placeholders until you fill them in.
- **Experience sections** start empty on purpose. Add entries only for things that happened.
- **Stats** in `data/about.ts` stay hidden until you add real numbers.

## 7. Contact form

By default (`formEndpoint: ""` in `data/site.ts`) the form opens the visitor's email app with the message filled in, and the page says clearly that nothing is sent automatically.

To receive messages directly:

1. Create a free form at https://formspree.io and copy its endpoint URL (looks like `https://formspree.io/f/abcdwxyz`).
2. Paste it into `formEndpoint` in `data/site.ts`.
3. The form now posts to that service and shows success or error messages based on the real response.

## 8. Deploy to Vercel

**Option A: GitHub (recommended)**

1. Create a new repository on GitHub and push this project:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

2. Sign in at https://vercel.com with GitHub, choose Add New > Project, and import the repository.
3. Keep the detected Next.js settings and click Deploy.
4. Every push to `main` redeploys automatically. Copy the live URL into `site.url` in `data/site.ts`.

**Option B: Vercel CLI**

```bash
npm install -g vercel
vercel
vercel --prod
```

## Project structure

```
app/
  layout.tsx        Fonts, SEO metadata, theme script
  page.tsx          Page assembly
  globals.css       Theme variables and shared styles
  icon.svg          Favicon
components/         Navbar, Hero, About, Skills, Projects, Education,
                    Experience, Exploring, Contact, Footer, and helpers
data/               All editable content (see table above)
public/
  images/           Profile image and project visuals (SVG placeholders)
  resume.pdf        Placeholder resume, replace with yours
```

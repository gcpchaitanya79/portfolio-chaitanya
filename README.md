# portfolio-chaitanya

Personal portfolio for Chaitanya, Cloud Data & Backend Engineer (GCP, Java, Apache Beam, Spark). The content comes from `resume/Chaitanya_DataEngineer.docx`. It is a static site (HTML/CSS/JS) with no build step.

## Project structure

```
portfolio-chaitanya/
├── index.html            # Hero, stats, about, skills, projects, experience, contact
├── css/style.css         # Styles, with light/dark themes via CSS variables
├── js/
│   ├── theme-init.js     # Applies the saved theme before first paint
│   └── main.js           # Theme toggle, mobile menu, active nav link, footer year
├── images/profile.jpg    # Profile photo
├── assets/icons/         # Favicons
├── resume/Chaitanya_DataEngineer.docx   # Downloadable resume
└── .nojekyll             # Tells GitHub Pages to serve the files as they are
```

## Preview locally

Open `index.html` in a browser, or run `npx serve .` from this folder.

## Deploy

Push this folder to a GitHub repository, then go to **Settings → Pages → Deploy from a branch → `main` / root**.

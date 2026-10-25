# Marc Gabriel S. Sagubo — Portfolio

Static personal portfolio for GitHub Pages, using HTML, CSS, and vanilla JavaScript. No build step, dependencies, backend, or API keys.

## Local preview

Open `index.html` in a browser, or run `python -m http.server 8000` in this directory and visit http://localhost:8000.

## Files and editing

- `index.html`: identity, About, projects, skills, interests, certificate and resume sections, and contact links.
- `styles.css`: Editorial Monochrome design, responsive layout, focus states, and reduced-motion support.
- `script.js`: mobile navigation and optional certificate gallery/dialog and resume download behavior.
- `content.js`: approved certificate metadata and resume path. The 11 certificate excerpts are grouped by original folder name, with TESDA capitalized. The resume points to the reviewed public PDF.
- `assets/marc-sagubo-profile.jpg`: supplied profile photo in About.
- `assets/projects/reef-finds/`: supplied Notifications, Home Page, and Profile screenshots.
- `assets/projects/etdms/`: supplied dashboard and mobile sign-in screenshots.

All references are relative and use case-sensitive filenames compatible with GitHub Pages. Project screenshots open their originals in a new tab. Reef Finds screenshots retain the supplied low resolution. ETDMS remains labeled as an ongoing team academic project; dashboard figures are not claims of real usage.

## Certificates and resume

The public portfolio matches the reviewed browser preview: 11 sanitized certificate excerpts and the PDF resume are included. Certificate images contain cropped excerpts with signatures, QR codes, credential identifiers, and the TESDA ID photo excluded. Titles, issuers, and dates come from the supplied materials. Only reviewed `*-redacted.webp` images and `assets/marc-sagubo-resume.pdf` are explicitly allowed by Git ignore rules. Raw certificate scans, Word documents, archives, local launchers, and private originals remain excluded.

## GitHub Pages

Repository: https://github.com/marcoffee-ysl/marcoffee-ysl.github.io

Pages is configured to deploy from `main` at `/ (root)`. `index.html`, CSS, JavaScript, and public assets live at the repository root. `.nojekyll` keeps this a plain static site. Push reviewed commits normally to `main`; never force-push. Check the repository's Pages deployment for completion at https://marcoffee-ysl.github.io/.

## Verification

Before publishing, validate all local asset paths with exact filename case and section anchors, check JavaScript syntax, and review the staged file list for documents or secrets. Check mobile Menu, keyboard focus, section links, reduced-motion support, contact links, and image links in a browser. Verify all 11 certificates, their folder headings, dialog controls, and the PDF resume download.

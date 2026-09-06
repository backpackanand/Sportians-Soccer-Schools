# Sportians Soccer Schools — Editable Website

This is a standalone, responsive one-page website inspired by the structure and simplicity of the Freedom Lifestyle Empire website:
- sticky navigation
- large hero section
- About / Vision
- Programs
- Player development pathway
- Values
- Coaches
- Experience
- strong CTA
- Contact / enquiry form
- mobile responsive layout

## Files

- `index.html` — all website text/content and page structure
- `style.css` — all design, colors, typography and responsive styling
- `script.js` — mobile menu, year and enquiry form
- `assets/logo.svg` — replaceable placeholder Sportians mark

## IMPORTANT BEFORE PUBLISHING

The photo you supplied in ChatGPT is a photograph, not a standalone Sportians logo file. I therefore created an editable placeholder logo in `assets/logo.svg`.

If you have the actual Sportians logo:
1. Save it as `logo.png` or `logo.svg`.
2. Put it inside `assets/`.
3. In `index.html`, change `assets/logo.svg` to your filename in both logo locations.

Also replace:
- phone number
- Instagram/Facebook/YouTube links
- coach names/photos/qualifications
- exact age groups
- batch timings
- fees
- training-ground addresses
- trial booking details
- any claims/certifications with the exact official information

## How to test locally

1. Extract the ZIP.
2. Double-click `index.html`.
3. The site should open in your browser.
4. Edit `index.html`, `style.css` or `script.js` in VS Code / Notepad++.
5. Refresh the browser to see changes.

## How to publish FREE with GitHub Pages

1. Create/login to a GitHub account.
2. Create a new repository, for example:
   `sportians-soccer-schools`
3. Upload:
   - `index.html`
   - `style.css`
   - `script.js`
   - the entire `assets` folder
4. Open the repository's `Settings`.
5. Go to `Pages`.
6. Under Build and deployment, select:
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/ (root)`
7. Save.
8. Wait a few minutes.
9. GitHub will give you a public URL similar to:
   `https://YOUR-USERNAME.github.io/sportians-soccer-schools/`

## Custom domain

If you own something like `sportians.in`, you can connect it in:
GitHub repository → Settings → Pages → Custom domain.

Your domain provider will require DNS records. GitHub's Pages settings will show what to add.

## Contact form

The enquiry form uses `mailto:` and opens the visitor's email application.

For a professional website, replace this later with:
- Formspree
- Google Forms
- a WhatsApp enquiry button
- your own backend/API

## Quick content edits

Search `index.html` for:
- `Nagpur, Maharashtra, India`
- `sportians2021@gmail.com`
- `+91 XXXXX XXXXX`
- `COACH 01`
- `COACH 02`
- `COACH 03`
- `Instagram`
- `Facebook`
- `YouTube`

Then replace the sample text with official Sportians information.

## Design edits

At the top of `style.css`, edit:
- `--lime` for the main accent
- `--orange` for the secondary accent
- `--ink` for the dark background
- `--paper` for the light background

The website is intentionally built without a framework, so it is easy to edit.


## WhatsApp version

The Contact Us section now uses WhatsApp instead of an email form.

All Book a Trial / Enquire / Message Us buttons open WhatsApp with a pre-filled message.

### Set the real WhatsApp number

Search `index.html` for:

`91XXXXXXXXXX`

Replace it with the official Sportians WhatsApp number.

For example, if the number is +91 98765 43210, use:

`919876543210`

Do NOT include `+`, spaces or dashes.

After replacing the number, upload the updated `index.html`, `style.css` and `script.js` to GitHub.

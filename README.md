# Shaadify

**The complete wedding management platform. PLAN • ORGANISE • CELEBRATE • REMEMBER**

Conceptualize & Developed by Anoopam Shukla with SriSales.

Shaadify manages a Hindu wedding from the first conversation to the last thank-you: events and rituals (with regional traditions), guests and RSVP, invitations, food and catering, shopping, inventory, gifts, vendors, budget and accounts, travel, venue and decor, wedding-day control room, emergency plans, post-wedding closure, documents, photography, a digital archive and an on-device wedding assistant. English, Hindi and Gujarati labels; light and dark themes.

This repository is the **website version**. It is a static site: no server, no build step.

## Put it online with GitHub Pages

1. Create a new repository on GitHub (any name, for example `shaadify`).
2. Upload **all 11 files in this folder** (drag them in, including the `assets` folder). Keep the folder structure.
3. In the repository go to **Settings → Pages**, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, and Save.
4. After a minute your app is at `https://<your-username>.github.io/<repository>/`.

Files: `index.html`, `404.html`, `.nojekyll`, `manifest.webmanifest`, `sw.js`, `header.png`, `icon-192.png`, `icon-512.png`, `README.md`, and `assets/` with one script and one stylesheet.

## Using it

- **Install it:** open the site in Chrome, Edge or Safari and choose *Install* / *Add to Home Screen*. After the first load it also opens **offline**.
- **Your data stays in your browser** on that device (local storage). Nothing is uploaded unless you turn on Cloud sync. Clear your browser data and it is gone, so use **Settings → Export backup** regularly.
- **Browsers on different devices do not share data** by themselves. To share between devices, turn on **Cloud sync** and point it at your own sync server (an `https` address). The server only stores encrypted data.
- **Logins and roles** are optional (Users and access). They control what the app shows on that device; they do not protect data from someone who can open the browser's storage.
- PDF export uses the browser's print dialog: choose **Save as PDF**.

## Privacy

The site is hosted on GitHub, but wedding data never leaves your browser unless you configure sync. The page loads no analytics, ads or third-party scripts.
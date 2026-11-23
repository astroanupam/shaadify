# Shaadify

**The complete wedding management platform. PLAN • ORGANISE • CELEBRATE • REMEMBER**

Conceptualize & Developed by Anoopam Shukla with SriSales.

Shaadify manages a Hindu wedding from the first conversation to the last thank-you: events and rituals (with regional traditions), guests and RSVP, invitations, food and catering, shopping, inventory, gifts, vendors, budget and accounts, travel, venue and decor, wedding-day control room, emergency plans, post-wedding closure, documents, photography, a digital archive and an on-device wedding assistant. English, Hindi and Gujarati labels; light and dark themes.

This is the **website version**. It is a static site: no server, no build step, **no folders**. All 11 files sit side by side.

## Put it online

Upload **all 11 files** into the same folder of your website or repository:

`index.html`, `index-mvcCgxgH.js`, `index-B48Reye6.css`, `sw.js`, `manifest.webmanifest`, `header.png`, `icon-192.png`, `icon-512.png`, `404.html`, `.nojekyll`, `README.md`

**GitHub Pages:** create a repository, open *Add file → Upload files*, select all 11 files in this folder (Ctrl+A) and drop them in, then Commit. In *Settings → Pages* choose *Deploy from a branch*, branch *main*, folder */ (root)*. Your app appears at `https://<username>.github.io/<repository>/`.

**Any web host:** put the 11 files in one folder, for example `public_html/shaadify/`. The app works from any folder because it uses relative paths.

Check: `index-mvcCgxgH.js` and `index-B48Reye6.css` must open in the browser at the same address as `index.html`. If they show "not found", the page will stay blank.

## Using it

- **Install it:** open the site in Chrome, Edge or Safari and choose *Install* / *Add to Home Screen*. After the first load it also opens **offline**.
- **Your data stays in your browser** on that device (local storage). Nothing is uploaded unless you turn on Cloud sync. Clear your browser data and it is gone, so use **Settings → Export backup** regularly.
- **Browsers on different devices do not share data** by themselves. To share between devices, turn on **Cloud sync** and point it at your own sync server (an `https` address). The server only stores encrypted data.
- **Logins and roles** are optional (Users and access). They control what the app shows on that device; they do not protect data from someone who can open the browser's storage.
- PDF export uses the browser's print dialog: choose **Save as PDF**.

## Privacy

Wedding data never leaves your browser unless you configure sync. The page loads no analytics, ads or third-party scripts.
RIDE WITH RAHAMA — STATIC WEBSITE

HOW TO RUN
1. Extract this folder.
2. Open it in VS Code.
3. Install the Live Server extension (optional).
4. Right-click index.html > Open with Live Server.
   Or simply open index.html in your browser.

HOW TO CUSTOMIZE PRODUCTS
Open script.js and edit the products array.
- name: product title
- category: Lighting / Accessories / Riding Gear
- price: display text
- description: short explanation
- image: path to a photo inside images/
- link: exact product purchase URL

Add product images into the images folder and use paths like:
image: "images/foglights.jpg"

Leave link as "" until you have a verified purchase URL.
The site intentionally does not invent purchase links.

HERO IMAGE
The supplied illustrated motorcycle is included at:
images/ronin-illustration.png

INSTAGRAM
The profile link is set to https://www.instagram.com/_.rahama._/
Change it in index.html if your profile URL differs.

DEPLOY
You can deploy this static folder using GitHub Pages, Netlify, or Vercel.
No backend or database is required for this first version.

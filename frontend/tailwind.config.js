// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",  // ← added html
    "./src/**/*.css",                    // ← added css
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    // Protect classes used on Contact & Donate button
    'donate-btn',
    'nav-item',
    'nav-menu',
    'header',
    'header-right',
    'desktop-only',
    'logo-container',
    'header-left',
  ],
}
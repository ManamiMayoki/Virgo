# neel-constellation

A birthday website for Neel — a personal constellation mapped entirely in blue.

Built with React, React Three Fiber (for the 3D starfield), GSAP (for the scroll
and entrance animation), and Tailwind CSS. Every color on the site comes from
one blue palette on purpose.

**Live sections, in order:** a 3D constellation hero (an open book rising into
a shooting-star trail — the brightest star is Neel) → a blue sky / autumn
parallax section → a bookshelf tribute → an honest timeline of the
CSE → Data Science → Chemistry story → a hope section built around Apu bhai's
Botany-to-Google story → a photo gallery → a wishes wall → a closing blessing.

---

## Run it locally

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`).

## Build for deployment

```bash
npm run build
```

This creates a `dist/` folder with the finished static site. You can drag that
folder onto [Netlify](https://app.netlify.com/drop), or deploy it to
[Vercel](https://vercel.com) or GitHub Pages — any static host works, there's
no backend.

### Deploying to GitHub Pages (quick version)

1. Push this repo to GitHub as `neel-constellation`.
2. `npm install -D gh-pages`
3. Add to `package.json` scripts: `"deploy": "gh-pages -d dist"`
4. `npm run build && npm run deploy`
5. Turn on GitHub Pages in the repo settings, pointing at the `gh-pages` branch.

## Adding real photos

The gallery currently shows clean placeholder tiles with captions like
"Add a photo — first day of university." To swap in real photos:

1. Drop your image files into `src/assets/images/gallery/`.
2. Open `src/data/gallery.js`.
3. Import each image at the top and reference it in the `gallery` array, e.g.:

```js
import groupTrip from '../assets/images/gallery/group-trip.jpg'

export const gallery = [
  { src: groupTrip, caption: 'The trip none of us should have survived' },
  // ...
]
```

Any entry left with `src: ''` (or a broken path) automatically falls back to a
placeholder tile, so you can add captions before you have every photo ready.

## Editing the words

Almost all the copy lives in two files so you don't need to touch any
component to change it:

- `src/data/content.js` — the hero text, the timeline steps, the wishes wall.
- `src/data/gallery.js` — the photo list and captions.

## Project structure

```
src/
  components/        3D starfield, drifting leaves — the reusable visual bits
  sections/           Hero, SkySection, BookShelf, JourneySection,
                       HopeSection, Gallery, WishesWall, Footer
  data/                content.js, gallery.js — edit these for copy/photos
  App.jsx              assembles all sections + scroll progress bar
  index.css            the blue color palette + fonts (Tailwind v4 theme)
```

## A note on the color palette

Everything on the site pulls from these six blues, defined once in
`src/index.css`:

| Token       | Hex       | Used for                              |
|-------------|-----------|----------------------------------------|
| `void`      | `#050b18` | Base background                        |
| `midnight`  | `#0b1d3a` | Section bands, panels                  |
| `harbor`    | `#123059` | Borders, dividers                      |
| `core`      | `#1e5aa8` | Primary accent                         |
| `sky`       | `#4fa6e8` | Links, secondary accent                |
| `ice`       | `#bfe1ff` | Soft highlights, muted text            |
| `frost`     | `#eaf4ff` | Primary text on dark backgrounds       |

Change these six values to retheme the whole site.

---

Happy birthday, Neel.

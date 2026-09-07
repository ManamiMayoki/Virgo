// Placeholder photos are pulled live from Unsplash (free-to-use, no
// download needed) so the site looks finished immediately. The blue
// tint is applied by the site itself (see Gallery.jsx), so any photo
// works regardless of its original colors.
//
// To swap in YOUR real photos instead:
// 1. Drop image files into src/assets/images/gallery/
// 2. Import each one at the top of this file, e.g.:
//      import groupTrip from '../assets/images/gallery/group-trip.jpg'
// 3. Replace the matching `src` below with the imported variable.
//
// Any entry whose image fails to load automatically falls back to a
// placeholder tile, so nothing ever looks broken.

export const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?auto=format&fit=crop&w=800&q=80',
    caption: 'Replace me — the whole group, somewhere',
  },
  {
    src: 'https://images.unsplash.com/photo-1508169351866-777fc0047ac5?auto=format&fit=crop&w=800&q=80',
    caption: 'Replace me — the reading group',
  },
  {
    src: 'https://images.unsplash.com/photo-1754764979352-ed7ce14dc545?auto=format&fit=crop&w=800&q=80',
    caption: 'Replace me — that one blue sky he wouldn\u2019t stop pointing at',
  },
  {
    src: 'https://images.unsplash.com/photo-1764524437733-8e8d86833058?auto=format&fit=crop&w=800&q=80',
    caption: 'Replace me — favourite season, right on cue',
  },
  {
    src: 'https://images.unsplash.com/photo-1694230155228-cdde50083573?auto=format&fit=crop&w=800&q=80',
    caption: 'Replace me — chemistry lab, unimpressed face',
  },
  {
    src: 'https://images.unsplash.com/photo-1496469888073-80de7e952517?auto=format&fit=crop&w=800&q=80',
    caption: 'Replace me — first day of university',
  },
]

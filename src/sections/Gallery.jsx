import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gallery } from '../data/gallery.js'

gsap.registerPlugin(ScrollTrigger)

function Tile({ item, i }) {
  const [failed, setFailed] = useState(!item.src)

  return (
    <figure
      className="gallery-tile group relative aspect-[4/5] overflow-hidden rounded-sm bg-midnight ring-1 ring-harbor"
      style={{ gridRowEnd: i % 3 === 1 ? 'span 2' : 'span 1' }}
    >
      {!failed ? (
        <img
          src={item.src}
          alt={item.caption}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover grayscale-0 transition duration-700 [filter:sepia(1)_hue-rotate(175deg)_saturate(2.4)] group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-harbor to-midnight px-4 text-center">
          <svg width="22" height="22" viewBox="0 0 24 24" className="text-sky/60">
            <path
              fill="currentColor"
              d="M12 2l2.2 6.8H21l-5.6 4.1 2.1 6.9L12 15.8l-5.5 3.9 2.1-6.9L3 8.8h6.8z"
            />
          </svg>
          <figcaption className="font-body text-[12px] leading-snug text-ice/60">
            {item.caption}
          </figcaption>
        </div>
      )}
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-void/80 p-3 font-body text-[12px] text-ice/90 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
        {item.caption}
      </figcaption>
    </figure>
  )
}

export default function Gallery() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gallery-tile',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          scrollTrigger: { trigger: ref.current, start: 'top 75%' },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative bg-void px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <p className="font-body text-center text-[13px] uppercase tracking-[0.25em] text-sky/70">
          Proof we were there
        </p>
        <h2 className="font-display mt-5 text-center text-4xl text-frost sm:text-5xl">
          A few frames, out of many
        </h2>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3" style={{ gridAutoRows: '10rem' }}>
          {gallery.map((item, i) => (
            <Tile key={i} item={item} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ConstellationCanvas from '../components/ConstellationCanvas.jsx'
import { hero } from '../data/content.js'

export default function Hero() {
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.fromTo('.hero-canvas', { opacity: 0 }, { opacity: 1, duration: 1.6 })
        .fromTo(
          '.hero-eyebrow',
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.9'
        )
        .fromTo(
          '.hero-title span',
          { opacity: 0, y: 40, filter: 'blur(6px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, stagger: 0.08 },
          '-=0.4'
        )
        .fromTo(
          '.hero-subtitle',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          '.hero-date',
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          '-=0.4'
        )
        .fromTo(
          '.hero-scroll',
          { opacity: 0 },
          { opacity: 0.6, duration: 0.8 },
          '-=0.2'
        )
    }, rootRef)
    return () => ctx.revert()
  }, [])

  const letters = hero.title.split('')

  return (
    <section
      ref={rootRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-void"
    >
      <ConstellationCanvas className="hero-canvas absolute inset-0" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void/10 via-transparent to-void" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <p className="hero-eyebrow font-body text-[13px] font-medium uppercase tracking-[0.25em] text-sky/80">
          {hero.eyebrow}
        </p>
        <h1 className="hero-title font-display mt-4 text-[20vw] leading-[0.9] text-frost sm:text-[9rem]">
          {letters.map((l, i) => (
            <span key={i} className="inline-block">
              {l}
            </span>
          ))}
        </h1>
        <p className="hero-subtitle font-body mt-6 max-w-md text-balance text-[15px] leading-relaxed text-ice/80">
          {hero.subtitle}
        </p>
        <p className="hero-date font-display mt-10 text-lg italic text-sky/90">{hero.date}</p>
      </div>

      <div className="hero-scroll absolute bottom-8 left-1/2 z-10 -translate-x-1/2 font-body text-[11px] uppercase tracking-[0.3em] text-ice/50">
        scroll
      </div>
    </section>
  )
}

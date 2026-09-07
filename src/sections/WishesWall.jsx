import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { wishes } from '../data/content.js'

gsap.registerPlugin(ScrollTrigger)

export default function WishesWall() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.wish-card',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          scrollTrigger: { trigger: ref.current, start: 'top 75%' },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative bg-midnight px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <p className="font-body text-center text-[13px] uppercase tracking-[0.25em] text-sky/70">
          From the group chat
        </p>
        <h2 className="font-display mt-5 text-center text-4xl text-frost sm:text-5xl">
          Things we mean, said plainly
        </h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {wishes.map((w, i) => (
            <blockquote
              key={i}
              className="wish-card rounded-sm border border-harbor bg-void/60 p-7"
            >
              <p className="font-display text-lg italic leading-relaxed text-frost">
                {w.text}
              </p>
              <footer className="mt-4 font-body text-[12px] uppercase tracking-[0.2em] text-sky/70">
                — {w.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

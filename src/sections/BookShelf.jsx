import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Heights, widths and shades vary so the shelf reads as lived-in, not decorative.
const SPINES = [
  { h: 88, w: 26, shade: '#1e5aa8' },
  { h: 96, w: 22, shade: '#4fa6e8' },
  { h: 80, w: 30, shade: '#123059' },
  { h: 100, w: 24, shade: '#0b1d3a' },
  { h: 86, w: 20, shade: '#4fa6e8' },
  { h: 92, w: 28, shade: '#1e5aa8' },
  { h: 78, w: 22, shade: '#123059' },
  { h: 98, w: 26, shade: '#0b1d3a' },
  { h: 90, w: 24, shade: '#4fa6e8' },
  { h: 84, w: 30, shade: '#1e5aa8' },
  { h: 94, w: 20, shade: '#123059' },
  { h: 82, w: 26, shade: '#0b1d3a' },
]

export default function BookShelf() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.spine',
        { scaleY: 0, transformOrigin: 'bottom' },
        {
          scaleY: 1,
          duration: 0.7,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: { trigger: ref.current, start: 'top 70%' },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative bg-void px-6 py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-body text-[13px] uppercase tracking-[0.25em] text-sky/70">
          Between pages
        </p>
        <h2 className="font-display mt-5 text-4xl text-frost sm:text-5xl">
          We Know Your Favorite Writer is "Haemin Sunim"
        </h2>
        <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-ice/75">
          So,we choose to give you ur favorite writer's book, and we hope you can find your favorite book in our bookshelf.
        </p>
      </div>

      <div className="mx-auto mt-16 flex max-w-4xl items-end justify-center gap-[3px] rounded-sm border-b-4 border-harbor pb-3">
        {SPINES.map((b, i) => (
          <div
            key={i}
            className="spine rounded-t-[2px] shadow-[inset_2px_0_0_rgba(234,244,255,0.08)] transition-transform duration-300 hover:-translate-y-2"
            style={{ height: b.h, width: b.w, backgroundColor: b.shade }}
          />
        ))}
      </div>
    </section>
  )
}

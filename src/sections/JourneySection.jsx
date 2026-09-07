import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { journey } from '../data/content.js'

gsap.registerPlugin(ScrollTrigger)

export default function JourneySection() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.journey-item').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -24 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 78%' },
          }
        )
      })

      gsap.fromTo(
        '.journey-line',
        { scaleY: 0, transformOrigin: 'top' },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 60%',
            end: 'bottom 80%',
            scrub: 0.6,
          },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative bg-midnight px-6 py-32">
      <div className="mx-auto max-w-2xl">
        <p className="font-body text-[13px] uppercase tracking-[0.25em] text-sky/70">
          What actually happened
        </p>
        <h2 className="font-display mt-5 max-w-xl text-4xl text-frost sm:text-5xl">
          How we become Friends, and how we got to this point. The story is a little long, but it’s worth it.
        </h2>
        <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ice/70">
          Some of this is funny to us now, in the way hard things become
          funny once the wound closes a little. Some of it isn't funny at
          all. Both can be true. Here's the timeline, exactly as it happened.
        </p>

        <div className="relative mt-16 pl-9">
          <div className="absolute left-[7px] top-1 h-full w-px bg-harbor" />
          <div className="journey-line absolute left-[7px] top-1 h-full w-px bg-sky" />

          <ol className="flex flex-col gap-14">
            {journey.map((step, i) => (
              <li key={i} className="journey-item relative">
                <span className="absolute -left-9 top-1 flex h-4 w-4 items-center justify-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-sky ring-4 ring-void" />
                </span>
                <p className="font-body text-[12px] uppercase tracking-[0.2em] text-sky/70">
                  {step.year}
                </p>
                <h3 className="font-display mt-2 text-2xl text-frost">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-ice/75">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

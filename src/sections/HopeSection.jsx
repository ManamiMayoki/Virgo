import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function HopeSection() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hope-reveal',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          scrollTrigger: { trigger: ref.current, start: 'top 65%' },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-void px-6 py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 40%, rgba(30,90,168,0.35), transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <p className="hope-reveal font-body text-[13px] uppercase tracking-[0.25em] text-sky/70">
          A seat is not a sentence
        </p>

        <h2 className="hope-reveal font-display mt-6 text-3xl leading-snug text-frost sm:text-5xl">
          Apu bhai studied Botany.
          <br />
          <span className="italic text-sky">Apu bhai works at Google.</span>
        </h2>

        <p className="hope-reveal mt-8 max-w-xl mx-auto text-[15px] leading-relaxed text-ice/75">
          Nobody's subject list decided that in advance. He built it, after,
          on his own terms — the same way anyone actually gets anywhere. What
          you're assigned at nineteen is a starting point. It has never once
          been the whole map.
        </p>

        <p className="hope-reveal font-display mt-10 text-2xl text-frost">
          So here's the actual wish, Neel:
        </p>
        <p className="hope-reveal mt-4 max-w-lg mx-auto text-[15px] leading-relaxed text-ice/80">
          Not "good luck with Chemistry." Not "hope the exams go better."
          <br />
          <span className="text-frost">
            We want to see your name on an offer letter from Google — or
            wherever you decide "there" is. We want front-row seats.
          </span>
        </p>

        <p className="hope-reveal font-display mt-10 text-xl italic text-sky/90">
          Allah bless you, Neel. This year, and the ones after it.
        </p>
      </div>
    </section>
  )
}

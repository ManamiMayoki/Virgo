import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import DriftingLeaves from '../components/DriftingLeaves.jsx'

gsap.registerPlugin(ScrollTrigger)

function Cloud({ className, style }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 200 80"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
    >
      <path
        d="M20 60 Q10 40 30 35 Q35 15 60 22 Q75 5 100 20 Q130 10 140 32 Q170 30 165 55 Q175 70 150 68 L30 68 Q10 68 20 60Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function SkySection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.cloud-layer').forEach((el) => {
        const speed = Number(el.dataset.speed || 1)
        gsap.to(el, {
          y: () => -100 * speed,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        })
      })

      gsap.fromTo(
        '.sky-copy',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: '.sky-copy',
            start: 'top 75%',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-void via-midnight to-void px-6 py-32"
    >
      <div className="cloud-layer absolute -left-10 top-16 w-[46rem] text-harbor/60" data-speed="0.4">
        <Cloud />
      </div>
      <div className="cloud-layer absolute right-[-6rem] top-40 w-[36rem] text-core/50" data-speed="0.8">
        <Cloud />
      </div>
      <div className="cloud-layer absolute left-1/4 bottom-10 w-[30rem] text-sky/30" data-speed="1.2">
        <Cloud />
      </div>

      <DriftingLeaves count={14} />

      <div className="sky-copy relative z-10 mx-auto max-w-xl">
        <p className="font-body text-[13px] uppercase tracking-[0.25em] text-sky/70">
          Open sky, favourite season
        </p>
        <h2 className="font-display mt-5 text-4xl leading-tight text-frost sm:text-5xl">
          He'll tell you blue skies are best in autumn —
          <span className="italic text-sky"> when the light gets low and honest.</span>
        </h2>
        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ice/75">
          Not the loud blue of a summer noon. The quieter one — early evening,
          a little grey at the edges, the kind you notice because you've
          stopped to look up. That's the blue this whole page is trying to
          borrow.
        </p>
      </div>
    </section>
  )
}

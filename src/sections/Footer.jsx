export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden bg-void px-6 py-24 text-center">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(50% 60% at 50% 100%, rgba(30,90,168,0.3), transparent 70%)',
        }}
      />
      <div className="relative z-10 mx-auto max-w-lg">
        <p className="font-display text-2xl italic text-sky/90">
          May Allah make this year lighter than the last one, Neel.
        </p>
        <p className="mt-5 font-body text-[15px] leading-relaxed text-ice/70">
          Happy birthday. We picked the color, obviously.
        </p>
        <p className="mt-10 font-body text-[12px] uppercase tracking-[0.25em] text-ice/40">
          07.09 &middot; built by the people who know you best &middot; {year}
        </p>
      </div>
    </footer>
  )
}

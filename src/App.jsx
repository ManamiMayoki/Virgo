import { useEffect, useState } from 'react'
import Hero from './sections/Hero.jsx'
import SkySection from './sections/SkySection.jsx'
import BookShelf from './sections/BookShelf.jsx'
import JourneySection from './sections/JourneySection.jsx'
import HopeSection from './sections/HopeSection.jsx'
import Gallery from './sections/Gallery.jsx'
import WishesWall from './sections/WishesWall.jsx'
import Footer from './sections/Footer.jsx'

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      setProgress(max > 0 ? h.scrollTop / max : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed left-0 top-0 z-50 h-[2px] w-full bg-transparent">
      <div
        className="h-full bg-sky transition-[width] duration-100 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  )
}

export default function App() {
  return (
    <div className="bg-void">
      <ScrollProgress />
      <Hero />
      <SkySection />
      <BookShelf />
      <JourneySection />
      <HopeSection />
      <Gallery />
      <WishesWall />
      <Footer />
    </div>
  )
}

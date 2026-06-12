import { useEffect, useRef, useState } from 'react'
import Hero, { GlobeEmoji } from './components/Hero'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Footer from './components/Footer'

function App() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [globeX, setGlobeX] = useState<number | null>(null)

  useEffect(() => {
    const GLOBES = ['🌏', '🌍', '🌎']
    let idx = 0
    const canvas = document.createElement('canvas')
    canvas.width = 64
    canvas.height = 64
    const ctx = canvas.getContext('2d')!
    const link = document.querySelector<HTMLLinkElement>('link[rel~="icon"]')
      ?? Object.assign(document.createElement('link'), { rel: 'icon' })
    if (!link.parentNode) document.head.appendChild(link)
    const draw = () => {
      ctx.clearRect(0, 0, 64, 64)
      ctx.font = '52px serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(GLOBES[idx], 32, 34)
      link.href = canvas.toDataURL()
      idx = (idx + 1) % GLOBES.length
    }
    draw()
    const t = setInterval(draw, 1000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const measure = () => {
      const h1 = document.querySelector('#hero h1') as HTMLElement
      const h2 = document.querySelector('#resume h2') as HTMLElement
      const wrapper = wrapperRef.current
      if (!h1 || !h2 || !wrapper) return
      const h1Rect = h1.getBoundingClientRect()
      const h2Rect = h2.getBoundingClientRect()
      const wrapperRect = wrapper.getBoundingClientRect()
      setGlobeX((h1Rect.right + h2Rect.left) / 2 - wrapperRect.left - 36)
    }

    measure()
    window.addEventListener('resize', measure)
    document.fonts.ready.then(measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: 'var(--c-bg)', color: 'var(--c-fg)' }}>
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <div ref={wrapperRef} className="relative flex flex-col md:flex-row md:items-start md:justify-between">
          <Hero />
          {globeX !== null && (
            <div
              className="absolute hidden md:block pt-32 md:pt-48 text-5xl md:text-7xl leading-tight pointer-events-none"
              style={{ left: globeX, transform: 'translateX(-50%)' }}
            >
              <GlobeEmoji />
            </div>
          )}
          <Resume />
        </div>
        <Projects />
        <Footer />
      </div>
    </div>
  )
}

export default App

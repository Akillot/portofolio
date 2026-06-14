import { useEffect } from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
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

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: 'var(--c-bg)', color: 'var(--c-fg)' }}>
      <div className="max-w-2xl mx-auto px-6 sm:px-10">
        <Hero />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}

export default App

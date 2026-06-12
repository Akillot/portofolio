import type { FC } from 'react'

const Resume: FC = () => (
  <section
    id="resume"
    className="pt-12 pb-16 w-full md:pt-48 md:pb-32 md:w-64 md:shrink-0 border-t md:border-t-0"
    style={{ borderColor: 'var(--c-border-light)' }}
  >
    <h2
      className="text-5xl md:text-7xl font-light tracking-tight mb-5"
      style={{ fontFamily: "'Inria Serif', serif", color: 'var(--c-fg)' }}
    >
      Resume
    </h2>
    <p className="text-sm mb-8 max-w-sm leading-relaxed" style={{ color: 'var(--c-muted)' }}>
      A summary of my work, experience, and background.
    </p>
    <a
      href="/resume.pdf"
      download
      className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5"
      style={{
        color: 'var(--c-fg)',
        border: '1px solid var(--c-fg)',
        transition: 'background-color 0.15s, color 0.15s',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLAnchorElement
        el.style.backgroundColor = 'var(--c-fg)'
        el.style.color = 'var(--c-bg)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLAnchorElement
        el.style.backgroundColor = ''
        el.style.color = 'var(--c-fg)'
      }}
    >
      Download PDF
      <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
        <path d="M7 1a.5.5 0 01.5.5v8.293l2.146-2.147a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L6.5 9.793V1.5A.5.5 0 017 1zM1 12.5a.5.5 0 011 0V13h10v-.5a.5.5 0 011 0v.5a1 1 0 01-1 1H2a1 1 0 01-1-1v-.5z" />
      </svg>
    </a>
  </section>
)

export default Resume

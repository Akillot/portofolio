import type { FC } from 'react'

const Footer: FC = () => (
  <footer className="py-10" style={{ borderTop: '1px solid var(--c-border-light)' }}>
    <p className="text-xs" style={{ color: 'var(--c-dim)' }}>
      © {new Date().getFullYear()} Nick Zozulia
    </p>
  </footer>
)

export default Footer

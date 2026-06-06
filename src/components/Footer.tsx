import type { FC } from 'react'

const Footer: FC = () => (
  <footer className="py-10 border-t border-gray-100">
    <p className="text-xs text-gray-400">
      © {new Date().getFullYear()} Nick Zozulia
    </p>
  </footer>
)

export default Footer

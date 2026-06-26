import type { FC } from 'react'
import { projects } from '../data/projects'
import type { Project } from '../data/projects'

const ExternalIcon: FC = () => (
  <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
    <path d="M3.5 3a.5.5 0 000 1H7.293L2.146 9.146a.5.5 0 00.708.708L8 4.707V8.5a.5.5 0 001 0v-5a.5.5 0 00-.5-.5h-5z" />
  </svg>
)

const ProjectRow: FC<{ project: Project; last?: boolean }> = ({ project, last }) => {
  const link = project.url ?? project.github

  return (
    <div
      className={`py-4 ${!last ? 'border-b' : ''}`}
      style={{ borderColor: 'var(--c-border-light)' }}
    >
      <div className="flex items-baseline gap-1 mb-1">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium"
            style={{ color: 'var(--c-fg)', transition: 'color 0.1s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--c-muted)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--c-fg)')}
          >
            {project.name}
          </a>
        ) : (
          <span className="text-sm font-medium" style={{ color: 'var(--c-fg)' }}>
            {project.name}
          </span>
        )}
        {link && (
          <span style={{ color: 'var(--c-very-dim)' }}>
            <ExternalIcon />
          </span>
        )}
      </div>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm leading-relaxed block"
          style={{ color: 'var(--c-muted)', transition: 'color 0.1s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--c-fg)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--c-muted)')}
        >
          {project.description}
        </a>
      ) : (
        <p className="text-sm leading-relaxed" style={{ color: 'var(--c-muted)' }}>
          {project.description}
        </p>
      )}
    </div>
  )
}

const sorted = [
  ...projects.filter(p => p.isCompany),
  ...projects.filter(p => !p.isCompany),
]

const Projects: FC = () => (
  <section id="projects" className="pb-20 md:pb-28">
    <p
      className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-2"
      style={{ color: 'var(--c-dim)' }}
    >
      Portfolio
    </p>
    <div>
      {sorted.map((p, i) => (
        <ProjectRow key={p.name} project={p} last={i === sorted.length - 1} />
      ))}
    </div>
  </section>
)

export default Projects

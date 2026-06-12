import type { FC } from 'react'
import { projects } from '../data/projects'
import type { Project } from '../data/projects'
import mnlrLogo from '../assets/mnlr.png'

const ExternalIcon: FC = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
    <path d="M3.5 3a.5.5 0 000 1H7.293L2.146 9.146a.5.5 0 00.708.708L8 4.707V8.5a.5.5 0 001 0v-5a.5.5 0 00-.5-.5h-5z" />
  </svg>
)

const CompanyRow: FC<{ project: Project }> = ({ project }) => {
  const link = project.url ?? project.github
  const logo = project.name === 'Monalar' ? mnlrLogo : undefined
  return (
    <div
      className="group relative mb-6 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      style={{
        border: '1px solid var(--c-border)',
        backgroundColor: 'var(--c-subtle)',
        transition: 'border-color 0.15s',
      }}
      onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.borderColor = 'var(--c-border-s)')}
      onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.borderColor = 'var(--c-border)')}
    >
      <div className="flex items-center gap-4">
        {logo && (
          <img src={logo} alt={`${project.name} logo`} className="w-10 h-10 object-contain shrink-0" />
        )}
        <div>
          <div className="flex items-baseline gap-3 mb-1">
            <span className="text-[10px] font-semibold tracking-[0.12em] uppercase" style={{ color: 'var(--c-dim)' }}>
              Company
            </span>
            <h3 className="text-base font-bold tracking-tight" style={{ color: 'var(--c-fg)' }}>{project.name}</h3>
          </div>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--c-muted)' }}>{project.description}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 shrink-0">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.filter((t) => t !== 'Company').map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium px-2 py-0.5 rounded"
              style={{
                color: 'var(--c-dim)',
                backgroundColor: 'var(--c-bg)',
                border: '1px solid var(--c-border)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} link`}
            className="transition-colors duration-150"
            style={{ color: 'var(--c-dim)' }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--c-muted-strong)')}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--c-dim)')}
          >
            <ExternalIcon />
          </a>
        )}
      </div>
    </div>
  )
}

const ProjectCard: FC<{ project: Project }> = ({ project }) => {
  const link = project.url ?? project.github
  return (
    <div
      className="group p-6 h-full flex flex-col"
      style={{
        border: '1px solid var(--c-border-light)',
        transition: 'border-color 0.15s',
      }}
      onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.borderColor = 'var(--c-border-s1)')}
      onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.borderColor = 'var(--c-border-light)')}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-sm font-semibold tracking-tight" style={{ color: 'var(--c-fg)' }}>{project.name}</h3>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} link`}
            className="mt-0.5 transition-colors duration-150"
            style={{ color: 'var(--c-very-dim)' }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--c-muted)')}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--c-very-dim)')}
          >
            <ExternalIcon />
          </a>
        )}
      </div>
      <p className="text-xs leading-relaxed mb-5 flex-1" style={{ color: 'var(--c-muted)' }}>{project.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-medium px-2 py-0.5 rounded"
            style={{ color: 'var(--c-dim)', backgroundColor: 'var(--c-subtle)' }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

const company = projects.filter((p) => p.isCompany)
const open = projects.filter((p) => !p.isCompany)

const Projects: FC = () => (
  <section id="projects" className="py-20 md:py-28">
    <p className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-10" style={{ color: 'var(--c-dim)' }}>
      Projects
    </p>

    {company.map((p) => (
      <CompanyRow key={p.name} project={p} />
    ))}

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px mt-px" style={{ backgroundColor: 'var(--c-subtle2)' }}>
      {open.map((project) => (
        <div key={project.name} className="h-full" style={{ backgroundColor: 'var(--c-bg)' }}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  </section>
)

export default Projects

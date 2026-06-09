import { useState, useRef, useEffect } from 'react'
import type { FC, KeyboardEvent } from 'react'
import { projects } from '../data/projects'
import { useInView } from '../hooks/useInView'

interface Line {
  type: 'input' | 'output'
  content: string
}

const PROMPT = 'nick@macbook ~ %'

const catMap: Record<string, string[]> = Object.fromEntries(
  projects
    .filter((p) => !p.isCompany)
    .map((p) => [p.name.toLowerCase().replace(/\s+/g, '-'), p.terminalLines])
)

function run(raw: string): string[] {
  const cmd = raw.trim().toLowerCase()

  if (cmd === 'help') {
    return [
      'Available commands:',
      '',
      '  help           show this message',
      '  ls             list all projects',
      '  ls projects    list all projects',
      '  cat <name>     read project details',
      '  whoami         about nick',
      '  clear          clear the terminal',
      '',
      'Projects: llmd, lumpi, morphkit, nano-vwap, conkit, postkit',
      '',
    ]
  }

  if (cmd === 'ls' || cmd === 'ls projects') {
    return [
      '',
      '  monalar   llmd      lumpi',
      '  morphkit  nano-vwap conkit',
      '  postkit',
      '',
    ]
  }

  if (cmd === 'whoami') {
    return [
      '',
      '  nick zozulia',
      '',
      '  builder. intelligence infrastructure. prague.',
      '  founder of monalar.',
      '',
      '  currently building at the intersection of',
      '  software and artificial intelligence.',
      '',
    ]
  }

  if (cmd.startsWith('cat ')) {
    const target = cmd.slice(4).trim()
    const lines = catMap[target]
    if (lines) return ['', ...lines, '']
    return [`  cat: ${target}: no such file`, '']
  }

  if (cmd === 'cat') return ['  usage: cat <project>', '']
  if (cmd === '') return []

  return [`  zsh: command not found: ${raw.trim()}`, '']
}

const Terminal: FC = () => {
  const [lines, setLines] = useState<Line[]>([
    { type: 'output', content: '  Welcome. Type "help" for available commands.' },
    { type: 'output', content: '' },
  ])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [historyIdx, setHistoryIdx] = useState(-1)

  const inputRef = useRef<HTMLInputElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const sectionRef = useInView<HTMLElement>()

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [lines])

  const submit = (cmd: string) => {
    const trimmed = cmd.trim()
    if (trimmed) setHistory((h) => [trimmed, ...h])
    setHistoryIdx(-1)

    if (trimmed.toLowerCase() === 'clear') {
      setLines([])
      setInput('')
      return
    }

    const out = run(trimmed)
    setLines((prev) => [
      ...prev,
      { type: 'input', content: cmd },
      ...out.map((c) => ({ type: 'output' as const, content: c })),
    ])
    setInput('')
  }

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      submit(input)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(historyIdx + 1, history.length - 1)
      setHistoryIdx(next)
      setInput(history[next] ?? '')
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = Math.max(historyIdx - 1, -1)
      setHistoryIdx(next)
      setInput(next === -1 ? '' : history[next])
    }
  }

  return (
    <section
      ref={sectionRef}
      id="terminal"
      className="fade-in px-8 md:px-12 py-24 md:py-32"
    >
      {/* Section label */}
      <div className="flex items-baseline justify-between mb-12 pb-4 border-b border-[#1a1a1a]">
        <span
          className="font-mono uppercase tracking-[0.22em] text-[#444]"
          style={{ fontSize: '11px' }}
        >
          Terminal
        </span>
        <span
          className="font-mono text-[#333] tracking-[0.15em]"
          style={{ fontSize: '10px' }}
        >
          zsh
        </span>
      </div>

      {/* macOS window */}
      <div
        className="overflow-hidden border border-[#2a2a2a]"
        style={{ borderRadius: '10px', maxWidth: '760px' }}
      >
        {/* Title bar */}
        <div
          className="flex items-center px-4 py-3 select-none"
          style={{ background: '#252525' }}
        >
          <div className="flex gap-2">
            <span className="block w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="block w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="block w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <div
            className="flex-1 text-center font-mono text-[#666] pr-14"
            style={{ fontSize: '12px' }}
          >
            nick — zsh
          </div>
        </div>

        {/* Body */}
        <div
          className="px-5 py-4 overflow-y-auto cursor-text"
          style={{
            background: '#111111',
            height: '340px',
            fontFamily: "'JetBrains Mono', ui-monospace, monospace",
            fontSize: '13px',
            lineHeight: '1.65',
          }}
          onClick={() => inputRef.current?.focus()}
        >
          {lines.map((line, i) =>
            line.type === 'input' ? (
              <div key={i} className="flex">
                <span className="text-[#4ade80] shrink-0 mr-2 select-none">{PROMPT}</span>
                <span className="text-[#e0e0e0]">{line.content}</span>
              </div>
            ) : (
              <div key={i} className="text-[#888] whitespace-pre">
                {line.content}
              </div>
            )
          )}

          {/* Current input */}
          <div className="flex items-center">
            <span className="text-[#4ade80] shrink-0 mr-2 select-none">{PROMPT}</span>
            <span className="text-[#e0e0e0]">{input}</span>
            <span className="cursor-blink inline-block w-[7px] h-[14px] bg-[#e0e0e0] ml-px align-middle" />
          </div>

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Hidden input */}
      <input
        ref={inputRef}
        className="sr-only"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={onKeyDown}
        autoCapitalize="none"
        autoCorrect="off"
        spellCheck={false}
        aria-label="Terminal input"
      />
    </section>
  )
}

export default Terminal

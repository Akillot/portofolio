export interface Project {
  name: string;
  description: string;
  terminalLines: string[];
  tags: string[];
  url?: string;
  github?: string;
  isCompany?: boolean;
}

export const projects: Project[] = [
  {
    name: 'Monalar',
    description: 'Software company building financial intelligence infrastructure.',
    terminalLines: [
      '  monalar — company',
      '',
      '  Software company building developer tooling and products.',
      '  Founder & CEO.',
      '',
      '  monalar.com',
    ],
    tags: ['Company', 'TypeScript', 'Go'],
    url: 'https://monalar.com',
    isCompany: true,
  },
  {
    name: 'llmd',
    description: 'Minimal LLM daemon for local inference and tooling.',
    terminalLines: [
      '  llmd — LLM daemon',
      '',
      '  Minimal daemon for running and managing local LLMs.',
      '  Lightweight interface for inference and tooling.',
      '',
      '  github.com/Akillot/llmd',
    ],
    tags: ['LLM', 'CLI'],
    github: 'https://github.com/Akillot/llmd',
  },
  {
    name: 'lumpi',
    description: 'Minimal, fast package manager for small projects.',
    terminalLines: [
      '  lumpi — package manager',
      '',
      '  Minimal, fast package manager for small and embedded',
      '  projects. Single binary, zero configuration.',
      '  Designed for environments where npm is too heavy.',
      '',
      '  github.com/Akillot/lumpi  |  lang: go',
    ],
    tags: ['Go', 'CLI'],
    github: 'https://github.com/Akillot/lumpi',
  },
  {
    name: 'morphkit',
    description: 'Composable data transformation pipeline library.',
    terminalLines: [
      '  morphkit — data transformation',
      '',
      '  Composable data transformation pipelines for TypeScript.',
      '  Type-safe, tree-shakeable, zero runtime dependencies.',
      '  Build complex transforms from simple composable primitives.',
      '',
      '  github.com/Akillot/morphkit  |  lang: typescript',
    ],
    tags: ['TypeScript', 'Library'],
    github: 'https://github.com/Akillot/morphkit',
  },
  {
    name: 'nano-vwap',
    description: 'Lightweight VWAP calculator for real-time market data.',
    terminalLines: [
      '  nano-vwap — market analytics',
      '',
      '  Nano-sized VWAP (Volume Weighted Average Price)',
      '  implementation. Handles streaming tick data with minimal',
      '  allocations. Built for high-frequency trading pipelines.',
      '',
      '  github.com/Akillot/nano-vwap  |  lang: go',
    ],
    tags: ['Go', 'Finance', 'Library'],
    github: 'https://github.com/Akillot/nano-vwap',
  },
  {
    name: 'conkit',
    description: 'Lightweight terminal UI component toolkit.',
    terminalLines: [
      '  conkit — terminal UI toolkit',
      '',
      '  Lightweight toolkit for building rich terminal UIs.',
      '  Composable component primitives, no heavy TUI framework',
      '  required. Small binary footprint and fast startup.',
      '',
      '  github.com/Akillot/conkit  |  lang: go',
    ],
    tags: ['Go', 'CLI', 'Library'],
    github: 'https://github.com/Akillot/conkit',
  },
  {
    name: 'postkit',
    description: 'Fluent HTTP client and request builder.',
    terminalLines: [
      '  postkit — HTTP client',
      '',
      '  Fluent HTTP request builder for Node.js and browser.',
      '  Supports middleware, interceptors, and retry logic.',
      '  Zero dependencies in the browser bundle.',
      '',
      '  github.com/Akillot/postkit  |  lang: typescript',
    ],
    tags: ['TypeScript', 'HTTP', 'Library'],
    github: 'https://github.com/Akillot/postkit',
  },
];

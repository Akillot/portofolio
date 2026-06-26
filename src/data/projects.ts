export interface Project {
  name: string;
  description: string;
  url?: string;
  github?: string;
  isCompany?: boolean;
}

export const projects: Project[] = [
  {
    name: 'Monalar Systems',
    description: 'Software company building financial intelligence infrastructure.',
    url: 'https://monalar.com',
    isCompany: true,
  },
  {
    name: 'lumpi',
    description: 'Search compressed log archives without decompressing them. Pack flat JSONL and CSV logs into .lmp files, then grep directly against the archive — faster than grepping the raw text, and often faster than grepping an uncompressed file.',
    github: 'https://github.com/Monalar/lumpi',
  },
  {
    name: 'morphkit',
    description: 'Zero-config file format converter for the terminal.',
    github: 'https://github.com/Akillot/morphkit',
  },
  {
    name: 'nano-vwap',
    description: 'Real-time VWAP calculator connected to Alpaca WebSocket trade feed. Subscribes to live trade events, computes Volume Weighted Average Price on the fly.',
    github: 'https://github.com/Akillot/nano-vwap',
  },
];

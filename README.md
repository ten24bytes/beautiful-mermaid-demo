# Beautiful Mermaid Demo

A demonstration project showcasing the capabilities of [Beautiful Mermaid](https://github.com/lukilabs/beautiful-mermaid), a TypeScript library for rendering Mermaid diagrams as beautiful SVGs or ASCII art.

## Features

- **16 diagram examples** across 5 types (flowchart, state, sequence, class, ER)
- **15 built-in themes** (Tokyo Night, Dracula, Nord, and more)
- **Dual output formats**: SVG for web and ASCII/Unicode for terminals
- **Custom theme creation** with two-color system
- **Real-world examples**: CI/CD pipelines, OAuth flows, database schemas

## Quick Start

Install dependencies:

```bash
npm install
```

Run the interactive menu:

```bash
npm run demo
```

## Demo Scripts

Each demo showcases different Beautiful Mermaid capabilities:

```bash
# Render the same diagram with all 15 themes
npm run demo:themes

# Show all 5 diagram types (flowchart, state, sequence, class, ER)
npm run demo:diagrams

# ASCII/Unicode output for terminals
npm run demo:ascii

# Create custom color schemes
npm run demo:custom

# Export all examples to SVG files
npm run demo:export
```

## Project Structure

```
src/
├── diagrams/          # 16 diagram examples organized by type
├── demos/             # 5 runnable demo scripts
└── utils/             # Helper utilities
```

## What is Beautiful Mermaid?

Beautiful Mermaid is a modern diagram rendering library that:

- Renders 100+ diagrams in under 500ms
- Has zero DOM dependencies
- Supports live theme switching via CSS custom properties
- Works in Node.js and browsers
- Outputs to both SVG and ASCII formats

Learn more at: https://github.com/lukilabs/beautiful-mermaid

## Examples

### Flowchart with Custom Theme

```typescript
import { renderMermaid } from 'beautiful-mermaid'

const diagram = `graph TD
  A[Start] --> B{Decision}
  B -->|Yes| C[Process]
  B -->|No| D[End]`

const theme = {
  bg: '#1a1a2e',
  fg: '#e0e0e0',
  accent: '#ff006e'
}

const svg = await renderMermaid(diagram, theme)
```

### ASCII Output for Terminals

```typescript
import { renderMermaidAscii } from 'beautiful-mermaid'

const ascii = renderMermaidAscii(`graph LR
  A[Start] --> B[End]`)

console.log(ascii)
```

## License

MIT

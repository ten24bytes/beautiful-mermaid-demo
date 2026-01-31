# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a demo project showcasing the capabilities of **Beautiful Mermaid** (https://github.com/lukilabs/beautiful-mermaid), a TypeScript library for rendering Mermaid diagrams as SVG or ASCII/Unicode text.

Beautiful Mermaid features:
- Ultra-fast rendering (100+ diagrams in <500ms)
- Five diagram types: Flowchart, State, Sequence, Class, and Entity-Relationship
- Dual output: SVG for rich interfaces and ASCII/Unicode for terminals
- 15+ built-in themes plus custom theme support
- Shiki compatibility for importing VS Code themes
- Zero DOM dependencies, pure TypeScript

## Project Purpose

This demo showcases Beautiful Mermaid's key features:
1. Different diagram types (flowchart, state, sequence, class, ER)
2. Theme variations (built-in themes + custom themes)
3. Both SVG and ASCII rendering
4. Real-world diagram examples (architecture, workflows, data models)
5. Integration patterns (Node.js, browser, TypeScript)

## Development Commands

**Install dependencies:**
```bash
npm install
# or
bun install
```

**Run examples:**
```bash
npm run demo              # Show interactive menu
npm run demo:themes       # Render with all 15 themes
npm run demo:diagrams     # Show all diagram types
npm run demo:ascii        # ASCII/Unicode terminal output
npm run demo:custom       # Custom theme examples
npm run demo:export       # Export all SVGs to files
```

## Project Structure

```
beautiful-mermaid-demo/
├── src/
│   ├── index.ts              # Main entry with demo menu
│   ├── diagrams/             # Diagram definitions (16 examples)
│   │   ├── flowcharts.ts     # 5 flowchart examples
│   │   ├── state-diagrams.ts # 3 state machine examples
│   │   ├── sequence-diagrams.ts # 3 sequence examples
│   │   ├── class-diagrams.ts # 3 class diagram examples
│   │   └── er-diagrams.ts    # 2 ER schema examples
│   ├── demos/                # Runnable demo scripts
│   │   ├── all-themes.ts     # Render with all 15 themes
│   │   ├── all-diagrams.ts   # Show all diagram types
│   │   ├── ascii-output.ts   # Terminal ASCII rendering
│   │   ├── custom-theme.ts   # Custom theme creation
│   │   └── svg-export.ts     # Export all to SVG files
│   └── utils/
│       └── helpers.ts        # File saving & display utilities
├── output/                   # Generated SVG files (gitignored)
├── website/                  # Interactive web showcase
│   ├── index.html            # Main page with split-view editor
│   ├── styles.css            # Dark theme styling
│   ├── app.js                # Application logic
│   └── examples.js           # Diagram examples data
└── CLAUDE.md
```

## Key Implementation Patterns

**Basic SVG rendering:**
```typescript
import { renderMermaid } from 'beautiful-mermaid'
const svg = await renderMermaid(`graph TD; A[Start] --> B{Decision}`)
```

**ASCII output for terminals:**
```typescript
import { renderMermaidAscii } from 'beautiful-mermaid'
const ascii = renderMermaidAscii(`graph LR; A --> B --> C`)
```

**Using built-in themes:**
```typescript
import { renderMermaid, THEMES } from 'beautiful-mermaid'
const svg = await renderMermaid(diagram, THEMES['tokyo-night'])
```

**Custom themes:**
Beautiful Mermaid uses a two-color system (bg/fg) with optional enrichment colors:
```typescript
const customTheme = {
  bg: '#0f0f0f',
  fg: '#e0e0e0',
  accent: '#ff6b6b',
  line: '#4ecdc4'
}
const svg = await renderMermaid(diagram, customTheme)
```

**Shiki integration:**
```typescript
import { fromShikiTheme } from 'beautiful-mermaid'
const colors = fromShikiTheme(highlighter.getTheme('vitesse-dark'))
```

## Web Showcase

The `website/` folder contains an interactive browser-based showcase:

**Features:**
- Split-view layout: code editor (left) + rendered diagram (right)
- Live rendering as you type (300ms debounce)
- All 16 examples organized by category (tabs + pills)
- Theme switcher (15 built-in themes)
- Copy SVG to clipboard
- Download SVG as file
- Keyboard shortcuts: Ctrl+Enter (render), Ctrl+S (download)

**Browser usage:**
```html
<script src="https://unpkg.com/beautiful-mermaid/dist/beautiful-mermaid.browser.global.js"></script>
<script>
  const { renderMermaid, THEMES } = beautifulMermaid;
  renderMermaid('graph TD; A-->B').then(svg => { ... });
</script>
```

## Important Notes

- Beautiful Mermaid works in both Node.js and browser environments
- All colors render as CSS custom properties, enabling live theme switching
- ASCII rendering is synchronous, SVG rendering is async
- The library has zero DOM dependencies and is fully TypeScript
- Supports transparent backgrounds via the `transparent` option
- Default font is Inter, but can be customized via the `font` option

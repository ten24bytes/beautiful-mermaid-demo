import { renderMermaid, THEMES } from 'beautiful-mermaid'
import { saveSvg, printHeader, printSuccess, formatSize } from '../utils/helpers.js'

const demoFlowchart = `graph TD
  A[Start] --> B{Decision}
  B -->|Yes| C[Process]
  B -->|No| D[Skip]
  C --> E[Complete]
  D --> E
  E --> F[End]`

async function main() {
  printHeader('Beautiful Mermaid - All Themes Demo')

  console.log('Rendering the same flowchart with all 15 built-in themes...\n')

  const themeNames = Object.keys(THEMES)
  const results: Array<{ theme: string; size: number }> = []

  for (const themeName of themeNames) {
    const theme = THEMES[themeName as keyof typeof THEMES]
    const svg = await renderMermaid(demoFlowchart, theme)

    const filename = `flowchart-${themeName}.svg`
    const filepath = saveSvg(filename, svg)

    results.push({ theme: themeName, size: svg.length })
    printSuccess(`${themeName.padEnd(25)} → ${filepath} (${formatSize(svg.length)})`)
  }

  console.log(`\n✓ Generated ${results.length} themed SVGs`)
  console.log(`\nAverage size: ${formatSize(
    results.reduce((sum, r) => sum + r.size, 0) / results.length
  )}`)

  console.log('\nOpen the output/ folder to view the SVG files in your browser!')
}

main().catch(console.error)

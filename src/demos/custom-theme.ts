import { renderMermaid } from 'beautiful-mermaid'
import { saveSvg, printHeader, printSubHeader, printSuccess } from '../utils/helpers.js'

const demoFlowchart = `graph TD
  A[User Request] --> B{Auth Check}
  B -->|Valid| C[Process]
  B -->|Invalid| D[Reject]
  C --> E[Response]
  D --> E`

async function main() {
  printHeader('Beautiful Mermaid - Custom Themes Demo')

  // Two-color system (Mono Mode)
  printSubHeader('1. Mono Mode (bg + fg only)')
  const monoTheme = {
    bg: '#0f0f0f',
    fg: '#e0e0e0'
  }

  let svg = await renderMermaid(demoFlowchart, monoTheme)
  saveSvg('custom-mono.svg', svg)
  printSuccess('Mono theme (minimalist two-color system)')

  // Dark neon theme with enrichment colors
  printSubHeader('2. Dark Neon Theme (enriched)')
  const neonTheme = {
    bg: '#0a0e27',
    fg: '#e0e0e0',
    accent: '#ff006e',
    line: '#06ffa5',
    muted: '#8b8b8b',
    border: '#3a86ff'
  }

  svg = await renderMermaid(demoFlowchart, neonTheme)
  saveSvg('custom-neon.svg', svg)
  printSuccess('Neon theme (cyberpunk aesthetic)')

  // Pastel theme
  printSubHeader('3. Pastel Theme')
  const pastelTheme = {
    bg: '#fef9ef',
    fg: '#4a4a4a',
    accent: '#ff9b85',
    line: '#a8dadc',
    surface: '#f1faee',
    border: '#457b9d'
  }

  svg = await renderMermaid(demoFlowchart, pastelTheme)
  saveSvg('custom-pastel.svg', svg)
  printSuccess('Pastel theme (soft and friendly)')

  // High contrast monochrome
  printSubHeader('4. High Contrast Monochrome')
  const monoContrast = {
    bg: '#000000',
    fg: '#ffffff',
    transparent: false
  }

  svg = await renderMermaid(demoFlowchart, monoContrast)
  saveSvg('custom-mono-contrast.svg', svg)
  printSuccess('Monochrome theme (maximum contrast)')

  // Transparent background
  printSubHeader('5. Transparent Background')
  const transparentTheme = {
    bg: '#ffffff',
    fg: '#2c3e50',
    transparent: true
  }

  svg = await renderMermaid(demoFlowchart, transparentTheme)
  saveSvg('custom-transparent.svg', svg)
  printSuccess('Transparent theme (overlay-ready)')

  console.log('\n✓ All custom themes saved to output/ folder')
  console.log('\nKey concepts:')
  console.log('  • Mono mode: Just bg + fg (system derives other colors)')
  console.log('  • Enriched: Add accent, line, muted, surface, border')
  console.log('  • Transparent: Set transparent: true for overlays')
  console.log('  • Live switching: Colors use CSS custom properties')
}

main().catch(console.error)

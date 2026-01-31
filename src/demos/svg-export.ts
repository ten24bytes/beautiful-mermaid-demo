import { renderMermaid, THEMES } from 'beautiful-mermaid'
import { flowcharts } from '../diagrams/flowcharts.js'
import { stateDiagrams } from '../diagrams/state-diagrams.js'
import { sequenceDiagrams } from '../diagrams/sequence-diagrams.js'
import { classDiagrams } from '../diagrams/class-diagrams.js'
import { erDiagrams } from '../diagrams/er-diagrams.js'
import { saveSvg, printHeader, printSuccess, formatSize } from '../utils/helpers.js'

const allExamples = [
  ...flowcharts.map(e => ({ ...e, type: 'flowchart' })),
  ...stateDiagrams.map(e => ({ ...e, type: 'state' })),
  ...sequenceDiagrams.map(e => ({ ...e, type: 'sequence' })),
  ...classDiagrams.map(e => ({ ...e, type: 'class' })),
  ...erDiagrams.map(e => ({ ...e, type: 'er' }))
]

async function main() {
  printHeader('Beautiful Mermaid - SVG Export Demo')

  console.log(`Exporting ${allExamples.length} diagrams to SVG files...\n`)

  const theme = THEMES['tokyo-night']
  let totalSize = 0

  for (const example of allExamples) {
    const svg = await renderMermaid(example.code, theme)

    // Create filename from name (slugify)
    const slug = example.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')

    const filename = `${example.type}-${slug}.svg`
    const filepath = saveSvg(filename, svg)

    totalSize += svg.length
    printSuccess(`${filename} (${formatSize(svg.length)})`)
  }

  console.log(`\n✓ Exported ${allExamples.length} SVG files`)
  console.log(`Total size: ${formatSize(totalSize)}`)
  console.log(`Average size: ${formatSize(totalSize / allExamples.length)}`)
  console.log('\nFiles saved to output/ folder')
  console.log('Open them in a browser to view!')
}

main().catch(console.error)

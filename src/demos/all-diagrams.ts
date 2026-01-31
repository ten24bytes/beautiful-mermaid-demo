import { renderMermaid, THEMES } from 'beautiful-mermaid'
import { flowcharts } from '../diagrams/flowcharts.js'
import { stateDiagrams } from '../diagrams/state-diagrams.js'
import { sequenceDiagrams } from '../diagrams/sequence-diagrams.js'
import { classDiagrams } from '../diagrams/class-diagrams.js'
import { erDiagrams } from '../diagrams/er-diagrams.js'
import { printHeader, printSubHeader, printSuccess } from '../utils/helpers.js'

const allDiagrams = [
  { type: 'Flowcharts', examples: flowcharts },
  { type: 'State Diagrams', examples: stateDiagrams },
  { type: 'Sequence Diagrams', examples: sequenceDiagrams },
  { type: 'Class Diagrams', examples: classDiagrams },
  { type: 'ER Diagrams', examples: erDiagrams }
]

async function main() {
  printHeader('Beautiful Mermaid - All Diagram Types Demo')

  const theme = THEMES['tokyo-night']
  let totalDiagrams = 0

  for (const { type, examples } of allDiagrams) {
    printSubHeader(type)

    for (const example of examples) {
      const svg = await renderMermaid(example.code, theme)
      totalDiagrams++

      printSuccess(`${example.name} - ${example.description}`)
    }
  }

  console.log(`\n✓ Successfully rendered ${totalDiagrams} diagrams across ${allDiagrams.length} types`)
  console.log('\nDiagram types supported:')
  allDiagrams.forEach(({ type, examples }) => {
    console.log(`  • ${type}: ${examples.length} examples`)
  })
}

main().catch(console.error)

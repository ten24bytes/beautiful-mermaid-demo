import { renderMermaidAscii } from 'beautiful-mermaid'
import { printHeader, printSubHeader } from '../utils/helpers.js'

const simpleDiagram = `graph LR
  A[Start] --> B[Process]
  B --> C[End]`

const decisionDiagram = `graph TD
  A[Input] --> B{Valid?}
  B -->|Yes| C[Accept]
  B -->|No| D[Reject]`

async function main() {
  printHeader('Beautiful Mermaid - ASCII Output Demo')

  // Unicode rendering (box-drawing characters)
  printSubHeader('Unicode Box-Drawing Characters (default)')
  console.log('\nSimple Flow:')
  console.log(renderMermaidAscii(simpleDiagram, { useAscii: false }))

  console.log('\nDecision Tree:')
  console.log(renderMermaidAscii(decisionDiagram, { useAscii: false }))

  // ASCII rendering (pure ASCII)
  printSubHeader('Pure ASCII Characters')
  console.log('\nSimple Flow:')
  console.log(renderMermaidAscii(simpleDiagram, { useAscii: true }))

  console.log('\nDecision Tree:')
  console.log(renderMermaidAscii(decisionDiagram, { useAscii: true }))

  // Custom spacing
  printSubHeader('Custom Spacing (paddingX: 8, paddingY: 3)')
  console.log('\nSimple Flow:')
  console.log(renderMermaidAscii(simpleDiagram, {
    useAscii: false,
    paddingX: 8,
    paddingY: 3
  }))

  console.log('\nPerfect for terminals, logs, and text-based environments!')
}

main().catch(console.error)

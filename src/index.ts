import { stdin, stdout } from 'process'
import { createInterface } from 'readline'

const demos = [
  {
    name: 'All Themes',
    description: 'Render diagrams with all 15 built-in themes',
    command: 'npm run demo:themes'
  },
  {
    name: 'All Diagram Types',
    description: 'Show flowchart, state, sequence, class, and ER diagrams',
    command: 'npm run demo:diagrams'
  },
  {
    name: 'ASCII Output',
    description: 'Terminal-friendly ASCII/Unicode rendering',
    command: 'npm run demo:ascii'
  },
  {
    name: 'Custom Themes',
    description: 'Create custom color schemes',
    command: 'npm run demo:custom'
  },
  {
    name: 'SVG Export',
    description: 'Export all examples to SVG files',
    command: 'npm run demo:export'
  }
]

function printMenu() {
  console.log('\n' + '='.repeat(60))
  console.log('Beautiful Mermaid Demo Project')
  console.log('='.repeat(60))
  console.log('\nAvailable demos:\n')

  demos.forEach((demo, index) => {
    console.log(`${index + 1}. ${demo.name}`)
    console.log(`   ${demo.description}`)
    console.log(`   Run: ${demo.command}\n`)
  })

  console.log('='.repeat(60))
  console.log('\nTo run a demo, use:')
  console.log('  npm run demo:<demo-name>')
  console.log('\nExample:')
  console.log('  npm run demo:themes')
  console.log('  npm run demo:ascii')
  console.log('\nProject features:')
  console.log('  • 16 diagram examples across 5 types')
  console.log('  • 15 built-in themes')
  console.log('  • SVG and ASCII output')
  console.log('  • Custom theme creation')
  console.log('  • Zero DOM dependencies')
  console.log('\nLearn more: https://github.com/lukilabs/beautiful-mermaid')
  console.log('='.repeat(60) + '\n')
}

async function main() {
  printMenu()
}

main().catch(console.error)

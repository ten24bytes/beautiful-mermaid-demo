import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'

/**
 * Save SVG content to a file
 */
export function saveSvg(filename: string, svg: string, outputDir = 'output'): string {
  const filepath = join(outputDir, filename)

  // Create output directory if it doesn't exist
  mkdirSync(dirname(filepath), { recursive: true })

  writeFileSync(filepath, svg, 'utf-8')

  return filepath
}

/**
 * Print a section header to console
 */
export function printHeader(text: string): void {
  const line = '='.repeat(60)
  console.log('\n' + line)
  console.log(text)
  console.log(line + '\n')
}

/**
 * Print a subsection header
 */
export function printSubHeader(text: string): void {
  console.log('\n' + text)
  console.log('-'.repeat(text.length))
}

/**
 * Print success message
 */
export function printSuccess(message: string): void {
  console.log(`✓ ${message}`)
}

/**
 * Print info message
 */
export function printInfo(message: string): void {
  console.log(`ℹ ${message}`)
}

/**
 * Format file size
 */
export function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

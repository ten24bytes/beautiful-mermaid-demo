// Application State
let currentCategory = 'flowcharts'
let currentExampleIndex = 0
let currentTheme = 'tokyo-night'
let currentSvg = ''
let renderTimeout = null

// DOM Elements
const editor = document.getElementById('editor')
const output = document.getElementById('output')
const errorContainer = document.getElementById('error')
const loadingIndicator = document.getElementById('loading')
const themeSelect = document.getElementById('theme-select')
const categoryTabs = document.getElementById('category-tabs')
const examplePills = document.getElementById('example-pills')
const toast = document.getElementById('toast')

// Initialize Beautiful Mermaid
const { renderMermaid, THEMES } = beautifulMermaid

// Initialize Application
function init() {
  populateThemeSelect()
  renderCategoryTabs()
  loadCategory('flowcharts')
  setupEventListeners()
}

// Populate theme dropdown
function populateThemeSelect() {
  const themes = Object.keys(THEMES)
  themes.forEach(theme => {
    const option = document.createElement('option')
    option.value = theme
    option.textContent = THEME_NAMES[theme] || theme
    if (theme === currentTheme) {
      option.selected = true
    }
    themeSelect.appendChild(option)
  })
}

// Render category tabs
function renderCategoryTabs() {
  categoryTabs.innerHTML = ''
  Object.entries(CATEGORIES).forEach(([key, category]) => {
    const tab = document.createElement('button')
    tab.className = `category-tab ${key === currentCategory ? 'active' : ''}`
    tab.textContent = `${category.icon} ${category.label}`
    tab.dataset.category = key
    tab.addEventListener('click', () => loadCategory(key))
    categoryTabs.appendChild(tab)
  })
}

// Load a category and show its examples
function loadCategory(category) {
  currentCategory = category
  currentExampleIndex = 0

  // Update active tab
  document.querySelectorAll('.category-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.category === category)
  })

  // Render example pills
  renderExamplePills()

  // Load first example
  loadExample(0)
}

// Render example pills for current category
function renderExamplePills() {
  const examples = EXAMPLES[currentCategory]
  examplePills.innerHTML = ''

  examples.forEach((example, index) => {
    const pill = document.createElement('button')
    pill.className = `example-pill ${index === currentExampleIndex ? 'active' : ''}`
    pill.textContent = example.name
    pill.title = example.description
    pill.dataset.index = index
    pill.addEventListener('click', () => loadExample(index))
    examplePills.appendChild(pill)
  })
}

// Load a specific example
function loadExample(index) {
  currentExampleIndex = index
  const example = EXAMPLES[currentCategory][index]

  // Update active pill
  document.querySelectorAll('.example-pill').forEach((pill, i) => {
    pill.classList.toggle('active', i === index)
  })

  // Set editor content
  editor.value = example.code

  // Render diagram
  renderDiagram(example.code)
}

// Render diagram from code
async function renderDiagram(code) {
  if (!code.trim()) {
    showEmpty()
    return
  }

  showLoading()
  hideError()

  try {
    const theme = THEMES[currentTheme]
    const svg = await renderMermaid(code, theme)
    currentSvg = svg
    output.innerHTML = svg
    hideLoading()
  } catch (error) {
    hideLoading()
    showError(error.message || 'Failed to render diagram')
  }
}

// Debounced render on input
function handleInput() {
  clearTimeout(renderTimeout)
  renderTimeout = setTimeout(() => {
    renderDiagram(editor.value)
  }, 300)
}

// Theme change handler
function handleThemeChange() {
  currentTheme = themeSelect.value
  renderDiagram(editor.value)
}

// Clear editor
function clearEditor() {
  editor.value = ''
  currentSvg = ''
  showEmpty()
}

// Copy SVG to clipboard
async function copySvg() {
  if (!currentSvg) {
    showToast('No diagram to copy')
    return
  }

  try {
    await navigator.clipboard.writeText(currentSvg)
    showToast('SVG copied to clipboard!')
  } catch (error) {
    showToast('Failed to copy SVG')
  }
}

// Download SVG as file
function downloadSvg() {
  if (!currentSvg) {
    showToast('No diagram to download')
    return
  }

  const blob = new Blob([currentSvg], { type: 'image/svg+xml' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `mermaid-diagram-${Date.now()}.svg`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)

  showToast('SVG downloaded!')
}

// Show/hide UI states
function showLoading() {
  loadingIndicator.classList.add('visible')
  output.innerHTML = ''
}

function hideLoading() {
  loadingIndicator.classList.remove('visible')
}

function showError(message) {
  errorContainer.textContent = message
  errorContainer.classList.add('visible')
  output.innerHTML = ''
}

function hideError() {
  errorContainer.classList.remove('visible')
}

function showEmpty() {
  output.innerHTML = `
    <div class="empty-state">
      <div class="empty-state-icon">📊</div>
      <div>Enter Mermaid code to see the diagram</div>
    </div>
  `
  hideError()
}

// Toast notification
function showToast(message) {
  toast.textContent = message
  toast.classList.add('visible')
  setTimeout(() => {
    toast.classList.remove('visible')
  }, 2000)
}

// Setup event listeners
function setupEventListeners() {
  editor.addEventListener('input', handleInput)
  themeSelect.addEventListener('change', handleThemeChange)

  // Button handlers via onclick in HTML
  window.clearEditor = clearEditor
  window.copySvg = copySvg
  window.downloadSvg = downloadSvg

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + Enter to render
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault()
      renderDiagram(editor.value)
    }
    // Ctrl/Cmd + S to download
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
      e.preventDefault()
      downloadSvg()
    }
  })
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init)

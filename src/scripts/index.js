import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import App from './views/app'
import swRegister from './utils/swRegister'

const hamburgerButtonElement = document.querySelector('#hamburger')
const drawerElement = document.querySelector('#drawer')
const mainElement = document.querySelector('main')

const app = new App({
  content: mainElement
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})

hamburgerButtonElement.addEventListener('click', (event) => {
  drawerElement.classList.toggle('open')
  event.stopPropagation()
  event.preventDefault()
})

mainElement.addEventListener('click', (event) => {
  drawerElement.classList.remove('open')
  event.stopPropagation()
})

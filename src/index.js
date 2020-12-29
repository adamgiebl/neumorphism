import React from 'react'
import { hydrate, render } from 'react-dom'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'

const rootElement = document.getElementById('root')
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement)
} else {
  render(<App />, rootElement)
}

serviceWorker.unregister()

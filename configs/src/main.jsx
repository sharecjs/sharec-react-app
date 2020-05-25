import React from 'react'
import { render } from 'react-dom'
import App from './App.jsx'
import './css/main.css'

const renderApp = (Component) => {
  render(<Component />, document.getElementById('app'))
}

if (module.hot) {
  renderApp(App)

  module.hot.accept()
}

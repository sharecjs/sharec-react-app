import React from 'react'
import { render } from 'react-dom'
import './css/main.css'

const App = () => (
  <section className="app">
    <h1 className="app__title">It works!</h1>
    <section className="app__description">
      <p>
        This is simple demostration of possibility to share configs, like
        create-react-app without ejecting and saving ability to modify code and
        configs without fear of incompability
      </p>
      <a href="https://github.com/lamartire/sharec">Read more about sharec</a>
    </section>
  </section>
)

render(<App />, document.getElementById('app'))

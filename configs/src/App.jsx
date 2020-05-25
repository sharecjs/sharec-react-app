import { hot } from 'react-hot-loader/root'
import React from 'react'

const App = () => (
  <section className="app">
    <h1 className="app__title">It works!</h1>
    <section className="app__description">
      <p>
        This is simple demostration of possibility to share configs, like
        create-react-app without ejecting and saving ability to modify configs
        (except .js, .ts files, read more about supported formats and tools{' '}
        <a href="https://github.com/lamartire/sharec">here</a>) without fear of
        incompability
      </p>
    </section>
  </section>
)

export default hot(App)

import React, { useState } from 'react'
import { render } from 'react-dom'

const App = () => {
  const [counter, changeCounter] = useState(0)

  return (
    <section>
      <h1>{counter}</h1>
      <button onClick={() => changeCounter(counter - 1)}>Decrement</button>
      <button onClick={() => changeCounter(counter + 1)}>Increment</button>
    </section>
  )
}

render(<App />, document.getElementById('app'))

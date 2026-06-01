import { useState } from 'react'
import Register from './Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <Register />
      </section>
    </>
  )
}

export default App

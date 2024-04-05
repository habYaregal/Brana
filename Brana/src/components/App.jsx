import { useState } from 'react'
import Landing from './landing_page/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Landing/>
    </>
  )
}

export default App

import { useState } from 'react'
import Landing from './landing_page/Landing'
import Admin from './admin_page/Admin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Landing/>
    </>
  )
}

export default App

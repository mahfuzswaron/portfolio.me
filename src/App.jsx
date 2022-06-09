import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='text-center text-primary text-6xl'>Hello world</h1>
    </div>
  )
}

export default App

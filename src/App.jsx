import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Banner></Banner>
    </div>
  )
}

export default App

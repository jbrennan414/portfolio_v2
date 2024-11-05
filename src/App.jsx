import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ContentContainer from './components/ContentContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <ContentContainer />
    </>
  )
}

export default App

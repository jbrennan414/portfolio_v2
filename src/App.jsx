import { useState } from 'react'
import './App.css'
import RightSection from './components/RightSection'
import LeftSection from './components/LeftSection'

function App() {
  return (
    <div className="App">
      <LeftSection />
      <RightSection />
    </div>
  )
}

export default App

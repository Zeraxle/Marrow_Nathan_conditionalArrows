import { useState } from 'react'
import './App.css'
import PersonCard from './components/PersonCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PersonCard firstName="Nathan" lastName="Marrow" age={33} hairColor="Brown" />
      <PersonCard firstName="Daniel" lastName="Tam" age={32} hairColor="Brown" />
      <PersonCard firstName="Adriana" lastName="Hernandez" age={46} hairColor="Brown" />
      <PersonCard firstName="Leslee" lastName="Walser" age={34} hairColor="Blonde" />
      
    </>
  )
}

export default App

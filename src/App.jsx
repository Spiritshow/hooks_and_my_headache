import { useContext, useState } from 'react'
import './App.css'
import Counter from './components/Counter/Counter';
import GeneratingArray from './components/GeneratingArray/GeneratingArray';

function App() {
  const [count, setCount] = useState(0)

  const flag = {c: count, setCount}
  
  const Context = useContext(flag);

  return (
    <>
      <GeneratingArray/>
    </>
  )
}

export default App

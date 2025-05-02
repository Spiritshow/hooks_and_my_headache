import { useContext, useState } from 'react'
import './App.css'
import Counter from './components/Counter/Counter';
import GeneratingArray from './components/GeneratingArray/GeneratingArray';
import Inputer from './components/Inputer/Inputer';

function App() {
  const [count, setCount] = useState(0)

  const flag = {c: count, setCount}
  
  const Context = useContext(flag);

  return (
    <>
      <Inputer/>
    </>
  )
}

export default App

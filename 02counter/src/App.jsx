import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Counter, setCount] = useState(15);

  const addCounter = () =>{
    if(Counter<20){
      //Counter = Counter + 1
      //setCounter(Counter)


      //setCounter(Counter + 1)
      //setCounter(Counter + 1)
      //setCounter(Counter + 1)
      
      setCount((Counter) => Counter + 1);
      setCount((Counter) => Counter + 1);
      setCount((Counter) => Counter + 1);
    }  
  }

  const removeCounter  = () => {
    if(Counter>0){
      setCount(Counter => Counter - 1);
    }
  }

  return (
    <>
      <h4>Counter : {Counter}</h4>
      <button id="addCount" onClick = {addCounter}>Add</button>
      <button id="removeCount" onClick={removeCounter}>Remove</button>
    </>
  )
}

export default App

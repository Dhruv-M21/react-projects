import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState("grey");

  return (
   <div className='w-full h-screen duration-200' style = {{backgroundColor: color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 px-3 py-2 rounded-full' >
        <button onClick={()=>setColor("red")} className='outline-none px-4 rounded-full' style={{backgroundColor:"red"}}>Red</button>
        <button onClick={()=>setColor("blue")} className='outline-none px-4 rounded-full' style={{backgroundColor:"blue"}}>Blue</button>
        <button onClick={()=>setColor("green")} className='outline-none px-4 rounded-full' style={{backgroundColor:"green"}}>Green</button>
        <button onClick={()=>setColor("yellow")} className='outline-none px-4 rounded-full' style={{backgroundColor:"yellow"}}>Yellow</button>
      </div>
    </div>
   </div>
  )
}

export default App

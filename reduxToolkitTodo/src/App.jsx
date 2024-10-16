import { useState } from 'react'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {
  
  return (
    <>
      <h1 className='text-center text-lg font-semibold text-white m-4'>TODO APP USING REDUX</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
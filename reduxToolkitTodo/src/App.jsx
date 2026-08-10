import { useState } from 'react'

import './App.css'
import AddTodo from './componentes/AddTodo'
import Todo from "./componentes/Todo"
function App() {
  

  return (
    <>
      <h2>Learn Redux Toolkit</h2>
      <AddTodo />
      <Todo/>
    </>
  )
}

export default App

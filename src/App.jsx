import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import KanbanBoard from './assets/component/KanbanBoard'
import Column from "./assets/component/column";
import Task from './assets/component/task'

function App() {


  return (
    <div className='App'>
      <KanbanBoard/>
    </div>
  )
}

export default App

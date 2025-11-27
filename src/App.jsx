import React from "react"

import "./App.css"
import "./components/TaskForm"
import TaskForm from "./components/TaskForm"
import TaskColumn from "./components/TaskColumn"

import toDoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

const App = () => {

  return (
    <div className='app'>
      <TaskForm />
      <main className='app_main'>
        <TaskColumn icon={toDoIcon} columnHeader="To Do"/>
        <TaskColumn icon={doingIcon} columnHeader="Doing" />
        <TaskColumn icon={doneIcon} columnHeader="Done" />
      </main>
    </div>
  )
}

export default App

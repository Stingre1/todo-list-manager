import React, { useContext, useState } from 'react'
import {completeFunc, deleteFunc} from '../App'



//Displays all the tasks
const ToDoItem = ({text, id, completed, timestamp}) => {
  let toggleCompleted = useContext(completeFunc)
  let deleteTodo = useContext(deleteFunc)
  console.log("toggle: " +toggleCompleted)
  console.log("delete: " + deleteTodo)
  return (
    <div>
      <li>
      {/* main content */}
      {text} &nbsp; &nbsp;
      {timestamp}
      {/* complete buttton */}

     
      {/* delete button writes undo/complete */}
      <button onClick={() => toggleCompleted(id)}>
        Complete
      </button>
      <button onClick={() => deleteTodo(id)}>Delete</button> 
      </li>
    </div>
  )
}

export default ToDoItem
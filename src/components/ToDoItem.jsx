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
      <div className='timeInfo'>{timestamp}</div>
      <div className='listItems'>{text} &nbsp; &nbsp;</div>
      
      {/* complete buttton */}

     
      {/* delete button writes undo/complete */}
      <div className='buttons'>
      <button className="completeButton buttonsItems" onClick={() => toggleCompleted(id)}>
          {completed ? "Undo" : "Complete"}
      </button>
      <button className="buttonsItems" onClick={() => deleteTodo(id)}>Delete</button> 
      </div>
      </li>
    </div>
  )
}

export default ToDoItem
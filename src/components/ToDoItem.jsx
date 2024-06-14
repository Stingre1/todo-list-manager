import React, { useContext, useState } from 'react'
import {data} from '../App'



//Displays all the tasks
const ToDoItem = (TodoArrayItem) => {
  let toggleCompleted = useContext(data[0])
  let deleteTodo = useContext(data[1])
  return (
    <div>
      <li>
      {/* main content */}
      {TodoArrayItem.text} &nbsp; &nbsp;
      {TodoArrayItem.timestamp}
      {/* complete buttton */}
      <button onClick={toggleCompleted(TodoArrayItem.id)}>
        {/* function to determine if we should write undo or complete in the button */}
        {()=>{
          if(TodoArrayItem.completed){
            return("Undo")
          }
          else{
            return("Complete")
          }
        }}
        {/* delete button */}
      </button>
      <button onClick={deleteTodo(TodoArrayItem.id)}>Delete</button>
      </li>
    </div>
  )
}

export default ToDoItem
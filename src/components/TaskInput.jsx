import React, { useState } from 'react'


//Part of the DOM where user inputs a new task
const TaskInput = ({ addTodo }) => {
  const [inputFieldValue, setInputFieldValue] = useState("")

  const handleSubmission = (eventObj) => {
    console.log("Submitted")
    eventObj.preventDefault() //prevents default behaviour submit event of the form

    console.log("Submitted")
    if(inputFieldValue.trim() === '') return true //if the input field is empty we do nothing

    addTodo(inputFieldValue)
    setInputFieldValue('')
  }

  return (
    <div className='taskInputTop'>
        <form onSubmit={handleSubmission}>
            <input className='inputFieldBox' type="text" value={inputFieldValue} onChange={(eventObj) => {
                console.log(eventObj.target.value)
                setInputFieldValue(eventObj.target.value)
            }} 
            placeholder=' Enter a new task' />
            <button className='addTask' type="Submit">+</button>
        </form>
    </div>
  )
}

export default TaskInput
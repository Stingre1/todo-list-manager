import { createContext, useState } from 'react';
import './App.css';
import './components/style.css';
import TaskInput from './components/TaskInput';
import ToDoItem from './components/ToDoItem';



const completeFunc = createContext()
const deleteFunc = createContext()

function App() {
  const [TodoArray, setTodoArray] = useState([])
  const [IdNumber, setIdNumber] = useState(1)

  let addTodoItem = (text) => {
    //...TodoArray is a copy of the array.
    //We then add a new object to the array with 4 key-value pairs
    setTodoArray([...TodoArray, {text, completed: false, id: IdNumber, timestamp: new Date().toLocaleTimeString()}])
    setIdNumber(IdNumber+1)  
  }


  //When the completed button is clicked we send the id of the to-do task here for parsing 
  let toggleCompleted = (inputId) => {
    //create a new array with all the same objects and properties but invert/toggle the completed variable of the the TodoArrayItem object with matching inputId
    let newTodoArray = TodoArray.map((TodoArrayItem) =>  {
      if(TodoArrayItem.id === inputId) {
        //if we find the matching id we return/update the Item but with toggle completed boolean
        return {...TodoArrayItem, completed: !TodoArrayItem.completed} //return same Object but with inverted completed value
      } else {
        return TodoArrayItem //else, we return the exact same object
      }
      })
      //Make the TodoArray our updated array
      setTodoArray(newTodoArray)
  }

  let deleteTodo=(inputId)=>{
    setTodoArray(TodoArray.filter((TodoArrayItem) => (TodoArrayItem.id !== inputId)))
  }
  
  
  
  // let n=document.querySelector('.input')
  // console.log(n.value)
  const contextValue1 = toggleCompleted
  const contextValue2 = deleteTodo


  return (
    <>
    
        <div className="App">
          <header>
            <div className='container'>
              <h1>To-Do List Manager</h1>
            </div>
          </header>
          <section className='contents'>
            <div className='container'>
              <TaskInput
                addTodo={addTodoItem}
              />
              
              <ul>
              <completeFunc.Provider value={contextValue1}>
                <deleteFunc.Provider value={contextValue2}>
                    {TodoArray.map((TodoArrayItem) => (
                      <ToDoItem
                        key={TodoArrayItem.id}
                        text={TodoArrayItem.text}
                        id = {TodoArrayItem.id}
                        completed={TodoArrayItem.completed}
                        timestamp={TodoArrayItem.timestamp}   
                      //   toggleCompleted={toggleCompleted}
                      //   deleteTodo={deleteTodo}
                      /> 
                    ))}
                </deleteFunc.Provider>
              </completeFunc.Provider>    
              </ul>
            </div>
          </section>
        </div>
     
  </>
  );
}

export default App;
export {completeFunc, deleteFunc}

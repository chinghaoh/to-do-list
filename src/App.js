import { useEffect, useState } from "react"
import "./styles.css"
import { NewToDoForm } from "./newToDoForm"
import { TodoList } from "./TodoList"

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []
    return JSON.parse(localValue)
  })

  //Store into localstorage everytime todos changes 
  useEffect(() => {
    localStorage.setItem("ITEMS",JSON.stringify(todos))
  },[todos])

  function addToDo(title){
    setTodos(currentTodos => {
      return [...currentTodos,
      { id: crypto.randomUUID(), title: title, completed: false }]
    })
  }

  //Set item status to completed or uncompleted
  function toggleTodo(id, completed){
    setTodos(currentTodos =>{
      return currentTodos.map(todo => {
        if (todo.id === id){
          todo.completed = completed
          return {...todo, completed}
        }
        return todo
      })
    })

  }

  //Deletes specific todo item
  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
    <NewToDoForm onSubmit={addToDo}></NewToDoForm>
      <h1 className="header">Todo list</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}></TodoList>
    </>
  )
}
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoList } from "./components/TodoList"
import { TodoInput } from "./components/TodoInput"
import { useState, useEffect } from "react"

function App() {
  const [todos, setTodos] = useState([])
  const [selectedTab, setSelectedTab] = useState('Open')

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, {input: newTodo, complete: false}]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleCompleteTodo(index) {
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true
    newTodoList[index] = completedTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleSaveData(currTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ todos: currTodos }))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) { return }
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  }, [])
  
  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    }) 
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  return (
    <>
      <Header 
        todos={todos}
      />
      <Tabs 
        selectedTab={selectedTab} 
        setSelectedTab={setSelectedTab} 
        todos={todos}
      />
      <TodoList 
        handleDeleteTodo={handleDeleteTodo} 
        handleCompleteTodo={handleCompleteTodo}
        selectedTab={selectedTab} 
        todos={todos}
      /> 
      <TodoInput 
        handleAddTodo={handleAddTodo} 
      />
    </>
  )
}

export default App

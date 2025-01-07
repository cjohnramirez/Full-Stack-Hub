import { useState } from "react"
import { TodoCard } from "./TodoCard"

export function TodoList(props) {
  
  const { todos, selectedTab } = props

  const filterTodosList = selectedTab === 'All' ?
    todos :
    selectedTab === 'Completed' ?
      todos.filter(val => val.complete) :
      todos.filter(val => !val.complete)

  const [editIndex, setEditIndex] = useState(null)

  return (
    <>
      {filterTodosList.map((todo, todoIndex) => {
          return(
            <TodoCard 
              {...props}
              key={todoIndex} 
              todoIndex={todos.findIndex(val => val.input === todo.input)} 
              todo={todo}
              setEditIndex={setEditIndex}
              isEdit={editIndex === todoIndex}
            />
          )
        })}
    </>
  )
}
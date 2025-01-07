import { useState } from "react"

export function TodoCard(props) {
  const { todo, todoIndex, handleDeleteTodo, handleEditTodo, handleCompleteTodo, setEditIndex, isEdit } = props

  const [userEditedTodo, setUserEditedTodo] = useState(todo.input)
  
  return (
    <div className="card todo-item">
      {isEdit
        ? <input value={userEditedTodo} onChange={(e) => {
          setUserEditedTodo(e.target.value)
        }}></input>
        : <p>{todo.input}</p>
      }
      <div className="todo-buttons">
        {isEdit
          ? <>
            <button onClick={() => {
              setEditIndex(null)
            }}>
              <h6>Cancel</h6>
            </button>
            <button onClick={() => {
              setEditIndex(null)
              handleEditTodo(todoIndex, userEditedTodo)
            }}>
              <h6>Finish</h6>
            </button>
          </>
          : <>
            <button onClick={() => {
              handleCompleteTodo(todoIndex)
            }} disabled={todo.complete}>
              <h6>Done</h6>
            </button>
            <button onClick={() => {
              handleDeleteTodo(todoIndex)
            }}>
              <h6>Delete</h6>
            </button>
            <button onClick={() => {
              setEditIndex(todoIndex)
            }}>
              <h6>Edit</h6>
            </button>
          </>
        }
      </div>
    </div>
  )
}
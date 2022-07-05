import React from "react"

const TodoItem = props => {
  const {
    key,
    index,
    value,
    deleteTodo,
    handleOnClickEdit
  } = props

  return (
    <div className="row-wrapper">
      <span>{value}</span>
      <button onClick={() => handleOnClickEdit(index)}>Edit</button>
      <button onClick={() => deleteTodo(index)} >Delete</button>
    </div>)
}

export default TodoItem
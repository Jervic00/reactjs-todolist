import React from "react"

const Todolist = () => {
  return (
    <div className="todolist-main">
      <div className="form-wrapper">
        <input type="text" placeholder="Create todolist"/>
        <button>ADD</button>
      </div>
      <div className="table-main">
        <div className="header-wrapper">
          <span>To Do</span>
          <span>Action</span>
          <span></span>
        </div>
        <div className="row-wrapper">
          <span>Do my homwork</span>
          <button>Edit</button>
          <button>Delete</button>
        </div>
        <div className="row-wrapper">
          <span>Do my homwork</span>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Todolist
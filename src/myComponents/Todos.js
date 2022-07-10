import React from 'react'
import TodoItem from "./TodoItem";


const Todos = (props) => {
  let myStyle={
    minHeight: "70vh"
  }
  let hrstyle={
    border:"4px"
  }
  return (
    <div className='container my-3' style={myStyle}>
      <h2 className='text-center my-3'>Todo lists</h2>
      {/* <TodoItem todo={props.todos[0]}/> */}

      {
        props.todos.length!==0?
        props.todos.map((eleTodo)=>{
          return(
              <>
              <TodoItem todo={eleTodo} onDelete={props.onDelete}/>
              <hr />
              </>
          )
        }):
        <h1>No todos to display</h1>
      }
    </div>
  )
}

export default Todos

// import React, { useState } from 'react'
import { useState } from 'react';
const AddTodo = (props) => {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");

    const submit=(e)=>{
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or desc cannot be empty");
        }
        else{
            props.addTodo(title,desc);
            setTitle("");  
            setDesc("");  
        }

    }
    return (
        <div className='container my-3'>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" className="form-control" value={title} id="title" onChange={(e)=>{setTitle(e.target.value)}} aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo

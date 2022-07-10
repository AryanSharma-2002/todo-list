import logo from './logo.svg';
import './App.css';
import Header from "./myComponents/Header";
import Todos from "./myComponents/Todos";
import Footer  from "./myComponents/Footer";
import { useEffect, useState } from 'react';
import AddTodo from './myComponents/AddTodo';

// import {  } from "./myComponents/header";
function App() {
  let initTodo;
  if (localStorage.getItem("todos")===null) {
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }


  const addTodo=(newTitle,newDesc)=>{
    console.log("I am adding this todo",newTitle,newDesc);
    let sno;
    if (todos.length==0) {
      sno=0;
    }
    else{
      sno=todos[todos.length-1].sno+1;
    }
    let myTodo={
      sno: sno,
      title:newTitle,
      desc:newDesc
    }
    console.log(myTodo);

    setTodos([...todos,myTodo]);
    
  }

  const onDelete=(todo)=>{
    console.log("I am on deleting the todo ",todo);
    setTodos(todos.filter((ele)=>{
        return ele!==todo;
    }))
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  
  const [todos,setTodos]=useState(initTodo);  
  // yeh ek hook ban gyi isme array hai setTodos inko update krega

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));

  },[todos])
  return (
    <>
      <Header title="Todos List" searchBar={true}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>   
  );
}

export default App;





// <div classNameName="App">
//       <header classNameName="App-header">
//         <div>45+5</div>
//         <img src={logo} classNameName="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           classNameName="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
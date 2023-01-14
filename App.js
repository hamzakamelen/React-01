import { useState } from 'react';
import './App.css';
import Input from './input';
function App() {
  const [text, setText] = useState("")
  const [todos, setTodos] = useState([])
  const [todoIndex,setTodoIndex] = useState()
  let add = ()=>{
    setTodos([...todos,{
      item: text
    }]);
    setText("");
  }
let editTodo = (index) =>{
  setTodoIndex(index)
  setText(todos[index])
}


  let delTodo = (index) =>{
    todos.splice(index,1)
    setTodos([...todos])
}
  return (
    <div className="App">
      <header className="App-header">
        {/* <input value={text} onChange={(e) =>setText(e.target.value)} type={text} placeholder={"Enter your To-do"}  /> */}
        <Input Value={text} Placeholder="Enter your to-do" onChange={(e) =>setText(e.target.value)}/>
        <button onClick={()=>add()}>Add</button>
        {todos.map((todo,index)=>
        <li key={index}>{todo.item} <button onClick={()=>delTodo(index)}>Delete</button>
         <button onClick={editTodo(index)}>Edit</button></li>
        )}
        </header>
    </div>
  );
}

export default App;
//npmi bootstrap 



{/* <p>{text}</p> */}
{/* <input
value={text}
onChange={(e) => setText(e.target.value)} placeholder="Enter" /> */}
{/* e.target se pura element mil gya */}
{/* <button onClick={() => add()}>Add</button>
{todos.map((todo,index) =>
  <div key={index}
  style = {{
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  }}
  >
  <p>{todo.item}</p>
  <button onClick={() => editTodo(index) }>Edit</button>
  <button onClick={() => delTodo(index) }>Delete</button>
  </div>
)} */}

// let add = () => {
//   // todos.push{text}
//   setTodos([...todos, {
//     item: text
//   }])
//   setText("");
// }
// let editTodo = (todoIndex,e) =>{
//   // let currentText = todos[todoIndex].item;
//   // setText(currentText);
//   // let todosClone = [...todos];
//   // todosClone.splice(todoIndex, 1, { item: currentText });
//   // setTodos(todosClone);
// console.log(todos[todoIndex])
// }

// let delTodo = (todoIndex) =>{
//   const todosClone = [ ...todos];
//   todosClone.splice(todoIndex , 1);
//   setTodos(todosClone)
//   setText("");

// }
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Input from "./input";

function App() {
  const [text, settext] = useState("");
  const [todos, settodos] = useState([]);
  const [indexnum, setindex] = useState();

  let add = () => {
    if (indexnum > -1) {
      todos[indexnum] = text;
      settodos([...todos]);
      setindex(-1);
    } else {
      settodos([...todos, text]);
    }
    settext("");
  };

  let edt = (i) => {
    setindex(i);
    settext(todos[i]);
  };

  let del = (i) => {
    todos.splice(i, 1);
    settodos([...todos]);
  };

  return (
    <div className="App">
      <h1>TODO-APP</h1>
      <input
        value={text}
        onChange={(e) => settext(e.target.value)}
        placeholder="Enter Todo"
      />
      <button onClick={add}>Add</button>

      <ul>
        {todos.map((x, i) => {
          return(
          <li key={i}>
            {x}
            <button onClick={() => edt(i)}>Edit</button>
            <button onClick={() => del(i)}>Delete</button>
          </li>
        );
        })}
      </ul>
     
    </div>
  );
}

export default App;

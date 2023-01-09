import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let item;
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    setTodos([...todos, item]);
    console.log(todos);
  };
  const inputChange = (e) => {
    console.log(e.target.value);
    item = e.target.value;
  };

  return (
    <div className="App">
      <div>
        <div>
          <input type="text" onChange={inputChange} />
          <button onClick={addTodo}>Add</button>
        </div>

        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

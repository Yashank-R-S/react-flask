import React, { useEffect, useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import { v1 as uuid } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);

  const markComplete = (id) => {
    fetch("http://127.0.0.1:5002/", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setTodos(response);
      });
  };

  const removeTodo = (id) => {
    fetch("http://127.0.0.1:5002/", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        remove: true,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setTodos(response);
      });
  };

  useEffect(() => {
    fetch("http://127.0.0.1:5001/")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setTodos(response);
      });
  }, []);

  const addTodo = (title) => {
    fetch("http://127.0.0.1:5002/", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: uuid(),
        title: title,
        completed: false,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setTodos(response);
      })
      .then(console.log(todos));
  };

  return (
    <div className="App">
      <Header />
      <AddTodo addTodo={addTodo} />
      <Todos
        todos={todos}
        markComplete={markComplete}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
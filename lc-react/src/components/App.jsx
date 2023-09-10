import { useState } from "react";
import NoTodos from "./NoTodos";
import "../reset.css";
import "../App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Master a language",
      isComplete: false,
      isEditing: false,
    },
    {
      id: 2,
      title: "Become the best ever",
      isComplete: false,
      isEditing: false,
    },
    {
      id: 3,
      title: "Learn how to program",
      isComplete: true,
      isEditing: false,
    },
  ]);

  const [idForTodo, setIdForTodo] = useState(4);

  function addTodo(todo) {
    setTodos([
      ...todos,
      {
        id: idForTodo,
        title: todo,
        isComplete: false,
      },
    ]);

    setIdForTodo((prevIdForTodo) => prevIdForTodo + 1);
  }

  function deleteTodo(id) {
    setTodos([...todos].filter((todo) => todo.id !== id));
  }

  function markAsEditing(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isEditing = !todo.isEditing;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function updateTodo(event, id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isEditing = false;
        if (event.target.value.trim() !== "") {
          todo.title = event.target.value;
        }
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function completeTodo(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function remaining() {
    return todos.filter((todo) => !todo.isComplete).length;
  }

  function clearCompleted(){
    setTodos([...todos].filter(todo => !todo.isComplete))
  }
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <TodoForm addTodo={addTodo} />
        {todos.length > 0 ? (
          <TodoList
            todos={todos}
            completeTodo={completeTodo}
            markAsEditing={markAsEditing}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            remaining={remaining}
            clearCompleted={clearCompleted}
          />
        ) : (
          <NoTodos />
        )}
      </div>
    </div>
  );
}

export default App;

import { useState } from 'react';
import '../reset.css';
import '../App.css';

function App() { 
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Master a language',
      isComplete: false,
      isEditing: false,
    },
    {
      id: 2,
      title: 'Become the best ever',
      isComplete: false,
      isEditing: false,
    },
    {
      id: 3,
      title: 'Learn how to program',
      isComplete: true,
      isEditing: false,
    },
  ]);

  

  const [todoInput, setTodoInput] = useState('');
  const [idForTodo, setIdForTodo] = useState(4);

  function addTodo(event) {
    event.preventDefault();

    if(todoInput.trim().length === 0){
      return;
    }

    setTodos([...todos, 
      {
        id: idForTodo,
        title: todoInput,
        isComplete: false,
    }])

    setTodoInput('');
    setIdForTodo(prevIdForTodo => prevIdForTodo + 1);
  }

  function deleteTodo(id){
    setTodos([...todos].filter(todo => todo.id !== id));
  }

  function markAsEditing(id){
    const updatedTodos = todos.map(todo => {
      if(todo.id === id){
        todo.isEditing = !todo.isEditing;
      }
      return todo;
    })
    setTodos(updatedTodos);
  }

  function updateTodo(event, id){
    const updatedTodos = todos.map(todo => {
      if(todo.id === id){
        todo.isEditing = false;
        if(event.target.value.trim() !== ''){
          
          todo.title = event.target.value;
        }
      }
      return todo;
    })
    setTodos(updatedTodos);
  }

  function completeTodo(id){
    const updatedTodos = todos.map(todo => {
      if(todo.id === id){
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    })
    setTodos(updatedTodos);
  }

  function handleInput(event) {
    setTodoInput(event.target.value);
  }


  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <form action="#" onSubmit={addTodo}>
          <input
            type="text"
            value ={todoInput}
            onChange={handleInput}
            className="todo-input"
            placeholder="What do you need to do?"
          />
        </form>
        { todos.length > 0 ? 
        <>
        <ul className="todo-list">
          {todos.map((todo, index) => (
          <li key={todo.id} className="todo-item-container">
            <div className="todo-item">
              <input type="checkbox" onChange={() => completeTodo(todo.id)} checked={todo.isComplete} />
              {!todo.isEditing ? 
                <span 
                  onDoubleClick={() => markAsEditing(todo.id)}
                  className={`todo-item-label ${
                  todo.isComplete ? 'line-through' : ''}`}>
                  {todo.title}
                </span>
                :
              
                <input 
                  type="text"
                  onBlur={(event) => updateTodo(event, todo.id)} 
                  onKeyDown={(event) => {
                    if(event.key === 'Enter'){
                      updateTodo(event, todo.id)
                    } else if(event.key === 'Escape'){
                      markAsEditing(todo.id)
                    }
                  }}
                  className="todo-item-input" 
                  defaultValue={todo.title} 
                  autoFocus
                  />
                }
            </div>
            <button onClick={() => deleteTodo(todo.id)} className="x-button">
              <svg
                className="x-button-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
        ))}
        </ul>
        

        <div className="check-all-container">
          <div>
            <div className="button">Check All</div>
          </div>

          <span>{todos.length} items remaining</span>
        </div>

        <div className="other-buttons-container">
          <div>
            <button className="button filter-button filter-button-active">
              All
            </button>
            <button className="button filter-button">Active</button>
            <button className="button filter-button">Completed</button>
          </div>
          <div>
            <button className="button">Clear completed</button>
          </div>
        </div>
        </>
     : 
      <div className="no-todos-container">
        <p> Add some Todos</p>
      </div>


      }
      </div>
    </div>
  );
}

export default App;
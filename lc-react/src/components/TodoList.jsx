import React from "react";
import TodoItemsRemaining from "./TodoItemsRemaining";
import TodoClearCompleted from "./TodoClearCompleted";

function TodoList(props) {
  return (
    <>
      <ul className="todo-list">
        {props.todos.map((todo, index) => (
          <li key={todo.id} className="todo-item-container">
            <div className="todo-item">
              <input
                type="checkbox"
                onChange={() => props.completeTodo(todo.id)}
                checked={todo.isComplete}
              />
              {!todo.isEditing ? (
                <span
                  onDoubleClick={() => props.markAsEditing(todo.id)}
                  className={`todo-item-label ${
                    todo.isComplete ? "line-through" : ""
                  }`}
                >
                  {todo.title}
                </span>
              ) : (
                <input
                  type="text"
                  onBlur={(event) => props.updateTodo(event, todo.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      props.updateTodo(event, todo.id);
                    } else if (event.key === "Escape") {
                      props.markAsEditing(todo.id);
                    }
                  }}
                  className="todo-item-input"
                  defaultValue={todo.title}
                  autoFocus
                />
              )}
            </div>
            <button
              onClick={() => props.deleteTodo(todo.id)}
              className="x-button"
            >
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

        <TodoItemsRemaining remaining={props.remaining} />
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
          <TodoClearCompleted clearCompleted={props.clearCompleted} />
        </div>
      </div>
    </>
  );
}

export default TodoList;

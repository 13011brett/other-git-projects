import React from 'react';

function TodoClearCompleted(props) {
    return <button onClick={props.clearCompleted} className="button"> Clear Completed</button>
}

export default TodoClearCompleted;
import React from "react";
function TodoItemsRemaining(props) {
  return <span>{props.remaining()} Items Remaining</span>;
}

export default TodoItemsRemaining;

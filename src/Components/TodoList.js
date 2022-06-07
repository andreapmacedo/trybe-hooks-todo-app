import React from "react";
import TodoContext from "../context/TodoContext";

function TodoList() {
  return (
    <TodoContext.Consumer>
      {({ todos }) => (
        <ul>
          {todos.map((todo, index) => <li key={index}>{todo}</li>)}
        </ul>
      )}
    </TodoContext.Consumer>
  );
}

export default TodoList;
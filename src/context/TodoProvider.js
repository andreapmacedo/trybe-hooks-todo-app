import React, { useState } from 'react';

import TodoContext from './TodoContext';

function TodoProvider({ children }) {  
  const [todos, setTodos] = useState([])
  
  const addTodo = (newTodo) => {
    setTodos(todos.concat(newTodo))
  }

  return (
    <div>
      <TodoContext.Provider value={{ todos, addTodo }}>
        {children}
      <TodoContext.Provider />      
    </div>
  );
}

export default TodoProvider;
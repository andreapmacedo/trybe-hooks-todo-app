import React from 'react';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';

import TodoProvider from './context/TodoProvider';

function App() {
  return (
    <div>
      <TodoProvider>
        <TodoInput />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;

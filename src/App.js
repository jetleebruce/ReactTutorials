import React from "react";
import TodoList from "./Todo/TodoList";

function App() {

  const todos = [
    {id: 1, completed: false, title: 'Купить морковь'},
    {id: 2, completed: false, title: 'Купить момлоко'},
    {id: 3, completed: false, title: 'Купить машину'}
  ]

  return (
    <div className='wrapper'>
      <h1>React Tutorial</h1>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;

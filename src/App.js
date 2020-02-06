import React from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Купить морковь" },
    { id: 2, completed: false, title: "Купить момлоко" },
    { id: 3, completed: false, title: "Купить машину" }
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  return (
    <Context.Provider>
      <div className='wrapper'>
        <h1>React Tutorial</h1>
        <TodoList todos={todos} onToggle={toggleTodo} />
      </div>
    </Context.Provider>
  );
}

export default App;

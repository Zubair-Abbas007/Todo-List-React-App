import './App.css';
import NavScrollExample from './NavScrollExample';
import Footer from './MyComponents/Footer';
import Todo from './MyComponents/Todo';
import Todos from './MyComponents/Todos';
import AddTodo from './MyComponents/AddTodo';
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title, desc) => {
    let sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;
    const newTodo = { sno, title, desc };
    setTodos([...todos, newTodo]);
  };

  const onDelete = (todo) => {
    setTodos(todos.filter(t => t !== todo));
  };

  return (
    <>
      <NavScrollExample />
      <div className="container mt-4">
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} />
        <Footer />
      </div>
    </>
  );
}

export default App;

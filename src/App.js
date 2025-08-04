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

        {/* 👇 About Section */}
        <div id="about" className="mt-5">
          <h2>About This App</h2>
          <p>
            This is a simple React Todo List App made using React and Bootstrap.
            You can add and delete tasks easily. It's a beginner-friendly project that helps you learn React components, props, and state management.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;

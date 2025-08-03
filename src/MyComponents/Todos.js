import React from 'react';
import Todo from './Todo';

const Todos = ({ todos, onDelete }) => {
  return (
    <div className="container my-3">
      <h3>Your Todos</h3>
      {todos.length === 0 ? "No todos to display" :
        todos.map((todo) => (
          <Todo key={todo.sno} todo={todo} onDelete={onDelete} />
        ))
      }
    </div>
  );
};

export default Todos;

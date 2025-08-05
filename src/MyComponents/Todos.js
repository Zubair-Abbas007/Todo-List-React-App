import React from 'react';
import Todo from './Todo';

const Todos = ({ todos, onEdit, onDelete, onToggleComplete }) => {
  return (
    <div>
      {todos.length === 0 ? (
        <p>No todos to display.</p>
      ) : (
        todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggleComplete={onToggleComplete}
          />
        ))
      )}
    </div>
  );
};

export default Todos;

import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; // import icons

const Todos = ({ todos, onEdit, onDelete }) => {
  return (
    <div>
      <h4>Your Todos</h4>
      {todos.length === 0 ? (
        <p>No todos to display.</p>
      ) : (
        todos.map((todo, index) => (
          <div
            key={index}
            className="card my-2 p-2 d-flex flex-row justify-content-between align-items-center"
          >
            <div>
              <h5 className="mb-1">{todo.title}</h5>
              <p className="mb-0">{todo.desc}</p>
            </div>
            <div>
              <FaEdit
                onClick={() => onEdit(todo)} // ✅ FIXED: use onEdit, not editTodo
                style={{ cursor: 'pointer', marginRight: '15px' }}
                title="Edit"
              />
              <FaTrash
                onClick={() => onDelete(todo)}
                style={{ cursor: 'pointer' }}
                title="Delete"
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Todos;

import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Todo = ({ todo, onEdit, onDelete, onToggleComplete }) => {
  return (
    <div className="card my-2">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.title}
          </h5>
          <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.desc}
          </p>
        </div>
        <div className="d-flex align-items-center">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggleComplete(todo)}
            style={{ marginRight: '10px' }}
            title="Mark as complete"
          />
          <FaEdit
            onClick={() => onEdit(todo)}
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
    </div>
  );
};

export default Todo;

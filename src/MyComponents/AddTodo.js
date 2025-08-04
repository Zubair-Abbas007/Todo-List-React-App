import React, { useState, useEffect } from 'react';

const AddTodo = ({ addTodo, editingTodo }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    if (editingTodo) {
      setTitle(editingTodo.title);
      setDesc(editingTodo.desc);
    } else {
      setTitle('');
      setDesc('');
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert('Please fill out both fields!');
      return;
    }
    addTodo(title, desc);
    setTitle('');
    setDesc('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-3 bg-light rounded shadow-sm" autoComplete="off">
      <h4 className="mb-3">{editingTodo ? 'Edit Todo' : 'Add Todo'}</h4>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">Todo Title</label>
        <input
          type="text"
          className="form-control rounded"
          id="title"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoComplete="off"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="desc" className="form-label">Todo Description</label>
        <input
          type="text"
          className="form-control rounded"
          id="desc"
          placeholder="Enter description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          autoComplete="off"
        />
      </div>

      <button className="btn btn-primary w-10" type="submit">
        {editingTodo ? 'Update Todo' : 'Add Todo'}
      </button>
    </form>
  );
};

export default AddTodo;

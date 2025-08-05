import React, { useState, useEffect } from 'react';

function AddTodo({ addOrUpdateTodo, editMode, currentTodo }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    if (editMode && currentTodo) {
      setTitle(currentTodo.title);
      setDesc(currentTodo.desc);
    }
  }, [editMode, currentTodo]);

  const submit = (e) => {
    e.preventDefault();
    if (!title.trim() || !desc.trim()) {
      alert("Title or Description cannot be blank");
      return;
    }
    addOrUpdateTodo(title, desc);
    setTitle('');
    setDesc('');
  };

  return (
    <div>
      <h3 className="text-left my-3">

        {editMode ? "✏️ Edit Todo" : "Add a Todo"}
      </h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Todo Title</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="form-control"
            id="title"
            placeholder="Enter Todo Title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Todo Description</label>
          <textarea
            value={desc}
            onChange={e => setDesc(e.target.value)}
            className="form-control"
            id="desc"
            placeholder="Enter Todo Description"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {editMode ? "Update Todo" : "Add Todo"}
        </button>
      </form>
    </div>
  );
}

export default AddTodo;

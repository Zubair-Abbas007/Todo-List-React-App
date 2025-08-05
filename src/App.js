import React, { useState, useEffect } from 'react';
import AddTodo from './MyComponents/AddTodo';
import Todos from './MyComponents/Todos';
import NavScrollExample from './NavScrollExample';

function App() {
  const [todos, setTodos] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  // 🔍 Search-related states
  const [searchText, setSearchText] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  const addOrUpdateTodo = (title, desc) => {
    if (editMode && currentTodo) {
      const updatedTodos = todos.map(todo =>
        todo.id === currentTodo.id ? { ...todo, title, desc } : todo
      );
      setTodos(updatedTodos);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      setEditMode(false);
      setCurrentTodo(null);
    } else {
      const newTodo = {
        id: Date.now(),
        title,
        desc,
        completed: false,
      };
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
    }
  };

  const handleDelete = (todo) => {
    const updatedTodos = todos.filter(t => t.id !== todo.id);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const handleToggleComplete = (toggledTodo) => {
    const updatedTodos = todos.map(todo =>
      todo.id === toggledTodo.id
        ? { ...todo, completed: !todo.completed }
        : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const handleEdit = (todoToEdit) => {
    setEditMode(true);
    setCurrentTodo(todoToEdit);
  };

  // ✅ Filter logic based on search
  const filteredTodos = isSearchActive
    ? todos.filter(todo =>
        todo.title.toLowerCase().includes(searchText.toLowerCase())
      )
    : todos;

  const completedTodos = filteredTodos.filter(todo => todo.completed);
  const incompleteTodos = filteredTodos.filter(todo => !todo.completed);

  // 🔍 Search Handlers
  const handleSearch = () => {
    if (searchText.trim() !== '') {
      setIsSearchActive(true);
    }
  };

  const handleClearSearch = () => {
    setSearchText('');
    setIsSearchActive(false);
  };

  return (
    <>
      {/* ✅ Pass search props */}
      <NavScrollExample
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearch={handleSearch}
        handleClearSearch={handleClearSearch}
        isSearchActive={isSearchActive}
      />

      <div className="container my-4">
        <h2 className="text-center">Todo List</h2>

        <AddTodo
          addOrUpdateTodo={addOrUpdateTodo}
          editMode={editMode}
          currentTodo={currentTodo}
        />

        <div className="row mt-4">
          <div className="col-md-6">
            <h4>📝 Incomplete Tasks</h4>
            <Todos
              todos={incompleteTodos}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onToggleComplete={handleToggleComplete}
            />
          </div>

          <div className="col-md-6">
            <h4>✅ Completed Tasks</h4>
            <Todos
              todos={completedTodos}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onToggleComplete={handleToggleComplete}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

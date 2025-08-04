import React, { useState } from 'react';
import './App.css';
import AddTodo from './MyComponents/AddTodo';
import Todos from './MyComponents/Todos';
import NavScrollExample from './NavScrollExample';


function App() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [filteredTodos, setFilteredTodos] = useState(null); // null = show all
  const [isSearchActive, setIsSearchActive] = useState(false);

  const addTodo = (title, desc) => {
    if (editingTodo) {
      const updatedTodos = todos.map((todo) =>
        todo === editingTodo ? { title, desc } : todo
      );
      setTodos(updatedTodos);
      setEditingTodo(null);
    } else {
      setTodos([...todos, { title, desc }]);
    }
  };

  const handleEdit = (todo) => setEditingTodo(todo);

  const handleDelete = (todoToDelete) =>
    setTodos(todos.filter((todo) => todo !== todoToDelete));

  // ✅ Search only on button click
  const handleSearch = () => {
    const results = todos.filter((todo) =>
      todo.title.toLowerCase().includes(searchText.toLowerCase()) ||
      todo.desc.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredTodos(results);
    setIsSearchActive(true);
  };

  // ✅ Back to full list
  const handleClearSearch = () => {
    setFilteredTodos(null);
    setSearchText('');
    setIsSearchActive(false);
  };

  return (
    <div className="container my-3">
      <NavScrollExample
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearch={handleSearch}
        isSearchActive={isSearchActive}
        handleClearSearch={handleClearSearch}
      />
      <AddTodo addTodo={addTodo} editingTodo={editingTodo} />
      <Todos
        todos={filteredTodos !== null ? filteredTodos : todos}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;

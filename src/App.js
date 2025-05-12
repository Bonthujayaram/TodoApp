// src/App.js
import React, { useState, useEffect } from 'react';
import './index.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  

  const handleAdd = (text) => {
    const newTodo = {
      id: Date.now(),
      text
    };
    setTodos([...todos, newTodo]);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEdit = (id, newText) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo)));
  };

  return (
  <div className="container">
      <div className="cards">
     <div className="card card-1">
        <div className="card__content">
          <div className="App TodoForm">
            <div className="header">
              <h1>Todo App</h1>
            </div>
            <TodoForm onAdd={handleAdd} />
          </div>
          <div className="App TodoList">
          <div className="header1">
              <h1>Todo Item List</h1>
              <a href="#" class="TodoForm-link"></a>
            </div>
            <TodoList todos={todos} onDelete={handleDelete} onEdit={handleEdit} />
          </div>
        </div>
      </div>
  </div>
</div>

  );
};

export default App;
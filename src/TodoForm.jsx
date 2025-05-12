import React, { useState } from 'react';

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') {
      alert('Todo cannot be empty!');
      return;
    }
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-box">
      <span className="icon">
        {/* You can use any icon library like FontAwesome or Ionicons here */}
        <ion-icon name="add-circle-outline"></ion-icon>
      </span>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <label>Todo</label>
    </div>
      <button type="submit">Add Todo</button>
      <div className="Change-link">
        <a href="#" class="TodoList-link">View TodoList</a>
      </div>
    </form>
    
  );
};

export default TodoForm;
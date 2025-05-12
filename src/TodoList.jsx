import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete, onEdit }) => {
  return (
    <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
      {todos.length === 0 ? (
        <p>No todos available. Please add a new one.</p>
      ) : (
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit} />
        ))
      )}
    </div>
  );
};

export default TodoList;
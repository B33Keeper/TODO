// src/TodoList.jsx
import React, { useState } from 'react';
import './TodoList.css';


function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() === '') return;
    setTodos([...todos, { text: input, completed: false }]);
    setInput('');
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const markAllDone = () => {
    const updatedTodos = todos.map(todo => ({ ...todo, completed: true }));
    setTodos(updatedTodos);
  };

  const clearAll = () => setTodos([]);

  return (

    

    <div className="todo-container">
      <div className="todo-header">
      <h1>To do list</h1>
    </div>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Add a to-do item..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <div className="todo-controls">
        <button onClick={markAllDone}>Mark All Done</button>
        <button onClick={clearAll}>Clear All</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'done' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(index)}
            />
            {todo.text}
            <button className="delete-btn" onClick={() => deleteTodo(index)}>
              ❌
            </button>
          </li>
        ))}
      </ul>

      <div className="todo-footer">
        {todos.filter(todo => !todo.completed).length} items remaining
      </div>
    </div>
  );

  
}

export default TodoList;

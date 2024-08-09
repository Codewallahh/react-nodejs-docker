import React, { useState, useEffect } from 'react';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from './api';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchTodos().then(data => setTodos(data));
  }, []);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo({ title: newTodo }).then(todo => {
        setTodos([...todos, todo]);
        setNewTodo('');
      });
    }
  };

  const handleDeleteTodo = (id) => {
    deleteTodo(id).then(() => {
      setTodos(todos.filter(todo => todo.id !== id));
    });
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title} 
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


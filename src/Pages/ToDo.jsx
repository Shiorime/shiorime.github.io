import React, { useState, useRef } from 'react'
import ToDoList from './ToDoList'
import { v4 as uuidv4 } from 'uuid';

export default function ToDo() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "")
      return;
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null;
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <>
        <h1>To-Do</h1>
        <ul>
          <ToDoList todos={todos} toggleTodo={toggleTodo}/>
        </ul>
        <input ref={todoNameRef} type="text" />
        <button onClick={handleAddTodo}>Add To-Do</button>
        <button onClick={handleClearTodos}>Clear Completed To-Dos</button>
        <div className="todo-left">{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  )
}
import React from 'react'
import ToDoItem from './ToDoItem'

export default function ToDoList({ todos, toggleTodo }) {
  return (
    todos.map(todos => {
        return <ToDoItem key={todos.id} toggleTodo={toggleTodo} todos={todos} />
    })
  )
}
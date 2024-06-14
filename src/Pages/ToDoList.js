import ToDoItem from './ToDoItem'

export default function ToDoList({ todos, toggleTodo }) {
  return (
    todos.map(todos => {
        return <ToDoItem className="todo-name" key={todos.id} toggleTodo={toggleTodo} todos={todos} />
    })
  )
}
export default function ToDoItem({ todos, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todos.id);
  }
  
  return (
    <div>
      <label className="todo-name">
        <input type="checkbox" checked={todos.complete} onChange={handleTodoClick} />
        {todos.name}
      </label>
    </div>
  )
}

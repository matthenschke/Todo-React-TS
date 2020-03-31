import React from "react";

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}
export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleTodo
}) => {
  return (
    <label style={{ textDecoration: todo.complete ? "line-through" : "none" }}>
      <input
        type="checkbox"
        onChange={e => toggleTodo(todo)}
        checked={todo.complete}
      ></input>
      {todo.text}
    </label>
  );
};

import React from "react";
import { TodoListItem } from "./TodoListItem";

interface TodoList {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}
export const TodoList: React.FC<TodoList> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => {
        return (
          <li key={todo.text}>
            <TodoListItem todo={todo} toggleTodo={toggleTodo} />{" "}
          </li>
        );
      })}
    </ul>
  );
};

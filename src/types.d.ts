type Todo = {
  text: string;
  complete: boolean;
};

type ToggleTodo = (selectedToggle: Todo) => void;

type AddTodo = (text: string) => void;

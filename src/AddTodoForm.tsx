import React, { useState, ChangeEvent, FormEvent } from "react";

interface AddTodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
    </form>
  );
};

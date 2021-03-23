import { useState } from "react";

const CreateTodo = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const inputText = (e) => {
    setTodoInput(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    console.log(todoInput);
    setTodos([...todos, todoInput]);
    setTodoInput("");
  };

  return (
    <div>
      <form onSubmit={submitTodoHandler}>
        <textarea onChange={inputText}></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateTodo;

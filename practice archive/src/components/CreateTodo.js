import { useState } from "react";

const CreateTodo = () => {
  const [todoInput, setTodoInput] = useState("");

  const inputText = (e) => {
    setTodoInput(e.target.value);
  };

  const submitTodoHandler = () => {
    console.log(todoInput);
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

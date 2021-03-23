const CreateTodo = ({ todos, setTodos, todoInput, setTodoInput }) => {
  const inputText = (e) => {
    setTodoInput(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    console.log(todoInput);
    setTodos([...todos, todoInput]);
    clearForm();
  };

  const clearForm = () => {
    setTodoInput("");
  };

  return (
    <div>
      <form onSubmit={submitTodoHandler}>
        <textarea value={todoInput} onChange={inputText}></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateTodo;

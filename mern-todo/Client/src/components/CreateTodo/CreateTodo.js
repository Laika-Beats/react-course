import { createTodo, updateTodo } from "../../actions/todos";

const CreateTodo = ({
  todoData,
  setTodoData,
  currentId,
  setCurrentId,
  dispatch,
}) => {
  const clear = () => {
    setCurrentId(0);
    setTodoData({ message: " " });
  };

  // BUTTON HANDLERS
  const submitHandler = (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createTodo({ ...todoData }));
      clear();
    } else {
      dispatch(updateTodo(currentId, { ...todoData }));
      clear();
    }
  };

  const clearHandler = (e) => {
    e.preventDefault();
    clear();
  };

  return (
    <form>
      <h1>Write a todo: </h1>
      <textarea
        value={todoData.message}
        onChange={(e) => setTodoData({ ...todoData, message: e.target.value })}
      ></textarea>
      <button onClick={submitHandler}>Submit</button>
      <button onClick={clearHandler}>Clear</button>
    </form>
  );
};

export default CreateTodo;

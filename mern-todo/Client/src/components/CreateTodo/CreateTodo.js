import { useEffect } from "react";
import { createTodo, updateTodo } from "../../actions/todos";
import { useDispatch, useSelector } from "react-redux";

const CreateTodo = ({ todoData, setTodoData, currentId, setCurrentId }) => {
  const dispatch = useDispatch();

  const todo = useSelector((state) =>
    currentId ? state.todos.find((t) => t._id === currentId) : null
  );

  useEffect(() => {
    if (todo) setTodoData(todo);
  }, [todo, setTodoData]);

  // BUTTON HANDLERS
  const submitHandler = (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createTodo({ ...todoData }));
      clearHandler();
    } else {
      dispatch(updateTodo(currentId, { ...todoData }));
      clearHandler();
    }
  };
  const clearHandler = () => {
    setCurrentId(0);
    setTodoData({ message: " " });
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

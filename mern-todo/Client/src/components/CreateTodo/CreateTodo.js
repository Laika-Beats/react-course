import { useEffect } from "react";
import { createTodo, updateTodo } from "../../actions/todos";
import { useDispatch, useSelector } from "react-redux";

const CreateTodo = ({ todoData, setTodoData, currentId }) => {
  const dispatch = useDispatch();

  const todo = useSelector((state) =>
    currentId ? state.todos.find((t) => t._id === currentId) : null
  );

  useEffect(() => {
    if (todo) setTodoData(todo);
  }, [todo, setTodoData]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createTodo({ ...todoData }));
    } else {
      dispatch(updateTodo(currentId, { ...todoData }));
    }
  };

  return (
    <form>
      <h1>Write a todo: </h1>
      <textarea
        value={todoData.message}
        onChange={(e) => setTodoData({ ...todoData, message: e.target.value })}
      ></textarea>
      <button onClick={submitHandler}>Submit</button>
    </form>
  );
};

export default CreateTodo;

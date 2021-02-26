import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodos, deleteTodo } from "../../actions/todos";

const Todo = ({ todo, setCurrentId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch, setCurrentId]);

  // BUTTON HANDLERS
  const deleteHandler = async () => {
    await dispatch(deleteTodo(todo._id));
    await dispatch(getTodos());
  };
  const editHandler = () => {
    const editTodo = () => {
      setCurrentId(todo._id);
    };
    editTodo();
  };

  return (
    <div>
      <h4>{todo.date}</h4>
      <h2>{todo.message}</h2>
      <button onClick={editHandler}>Edit</button>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default Todo;

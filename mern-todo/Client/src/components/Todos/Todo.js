import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodos } from "../../actions/todos";

const Todo = ({ todo, setCurrentId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch, setCurrentId]);

  return (
    <div>
      <h4>{todo.date}</h4>
      <h2>{todo.message}</h2>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default Todo;

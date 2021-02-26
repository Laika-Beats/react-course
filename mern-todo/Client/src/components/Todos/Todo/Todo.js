import { getTodos, updateTodo, deleteTodo } from "../../../actions/todos";
import "./Todo.css";

const Todo = ({ todo, setCurrentId, todoData, setTodoData, dispatch }) => {
  // BUTTON HANDLERS
  const deleteHandler = async () => {
    await dispatch(deleteTodo(todo._id));
    await dispatch(getTodos());
  };

  const editHandler = () => {
    setCurrentId(todo._id);
    window.scrollTo(0, 0);
  };

  const completeHandler = () => {
    setCurrentId(todo._id);
    if (todo.completed === false) {
      dispatch(
        updateTodo(todo._id, {
          ...todoData,
          message: todo.message,
          completed: true,
        })
      );
    }
    if (todo.completed === true) {
      dispatch(
        updateTodo(todo._id, {
          ...todoData,
          message: todo.message,
          completed: false,
        })
      );
    }
    clear();
  };

  const clear = () => {
    setCurrentId(0);
    setTodoData({ message: " " });
  };

  return (
    <div className={todo.completed ? "completed-todo" : "todo-container"}>
      <h4>{todo.date}</h4>
      <h2>{todo.message}</h2>
      <button onClick={editHandler}>Edit</button>
      <button onClick={deleteHandler}>Delete</button>
      <button onClick={completeHandler}>Complete</button>
    </div>
  );
};

export default Todo;

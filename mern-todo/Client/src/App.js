import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "./actions/todos";
import TodoList from "./components/Todos/TodoList";
import CreateTodo from "./components/CreateTodo/CreateTodo";

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const [todoData, setTodoData] = useState({
    message: " ",
    completed: false,
  });

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch, currentId]);

  return (
    <div>
      <CreateTodo
        todoData={todoData}
        setTodoData={setTodoData}
        currentId={currentId}
        setCurrentId={setCurrentId}
      />
      <TodoList todos={todos} setCurrentId={setCurrentId} />
    </div>
  );
};

export default App;

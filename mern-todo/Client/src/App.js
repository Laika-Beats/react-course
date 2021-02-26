import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "./actions/todos";
import TodoList from "./components/Todos/TodoList";
import CreateTodo from "./components/CreateTodo/CreateTodo";

const App = () => {
  const dispatch = useDispatch();

  const [currentId, setCurrentId] = useState(0);
  const [todoData, setTodoData] = useState({
    message: " ",
    completed: false,
  });

  const todos = useSelector((state) => state.todos);
  const todo = useSelector((state) =>
    currentId ? state.todos.find((t) => t._id === currentId) : null
  );

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch, currentId]);

  useEffect(() => {
    if (todo) setTodoData(todo);
  }, [todo, setTodoData]);

  return (
    <div>
      <CreateTodo
        todoData={todoData}
        setTodoData={setTodoData}
        currentId={currentId}
        setCurrentId={setCurrentId}
        dispatch={dispatch}
      />
      <TodoList
        todos={todos}
        setCurrentId={setCurrentId}
        todoData={todoData}
        setTodoData={setTodoData}
        currentId={currentId}
        dispatch={dispatch}
      />
    </div>
  );
};

export default App;

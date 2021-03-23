import { useState } from "react";
import TodoFeed from "./components/TodoFeed";
import CreateTodo from "./components/CreateTodo";

const App = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <CreateTodo
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoFeed todos={todos} />
    </div>
  );
};

export default App;

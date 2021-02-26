import TodoList from "./components/Todos/TodoList";
import CreateTodo from "./components/CreateTodo/CreateTodo";

const App = () => {
  return (
    <div>
      <CreateTodo />
      <TodoList />
    </div>
  );
};

export default App;

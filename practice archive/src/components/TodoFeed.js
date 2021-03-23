import Todo from "./Todo";

const TodoFeed = ({ todos, setTodos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TodoFeed;

import Todo from "./Todo";

const TodoFeed = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo} todo={todo} />
      ))}
    </div>
  );
};

export default TodoFeed;

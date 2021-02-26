import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo._id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;

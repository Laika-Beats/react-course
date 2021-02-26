import Todo from "./Todo/Todo";

const TodoList = ({ todos, setCurrentId }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo._id} todo={todo} setCurrentId={setCurrentId} />
      ))}
    </div>
  );
};

export default TodoList;

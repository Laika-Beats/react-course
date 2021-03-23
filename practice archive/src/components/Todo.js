const Todo = ({ todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((t) => t != todo));
  };

  return (
    <div>
      <h2>{todo}</h2>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default Todo;

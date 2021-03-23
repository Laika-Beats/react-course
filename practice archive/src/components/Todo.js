const Todo = ({ todo, todos, setTodos }) => {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  const deleteHandler = () => {
    setTodos(todos.filter((t) => t !== todo));
  };

  return (
    <div>
      <h4>{`${month}/${date}/${year}`}</h4>
      <h2>{todo}</h2>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default Todo;

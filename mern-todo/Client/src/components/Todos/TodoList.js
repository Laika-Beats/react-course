import Todo from "./Todo/Todo";

const TodoList = ({
  todos,
  setCurrentId,
  todoData,
  setTodoData,
  currentId,
  dispatch,
}) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo._id}
          todo={todo}
          setCurrentId={setCurrentId}
          todoData={todoData}
          setTodoData={setTodoData}
          currentId={currentId}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
};

export default TodoList;

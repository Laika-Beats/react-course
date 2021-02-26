import Todo from "./Todo/Todo";

const TodoList = ({
  todos,
  todoData,
  setTodoData,
  currentId,
  setCurrentId,
  dispatch,
}) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo._id}
          todo={todo}
          todoData={todoData}
          setTodoData={setTodoData}
          currentId={currentId}
          setCurrentId={setCurrentId}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
};

export default TodoList;

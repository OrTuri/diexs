import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div style={{ height: "250px", overflow: "auto" }}>
      {props.todos.map((todo) => {
        return <Todo todo={{ ...todo }} key={todo.id} />;
      })}
    </div>
  );
};

export default TodoList;

import TodoItem from "./todo/TodoItem";

const PascalCase = ({ todos, toggleTodoCompleted, deleteTodo }) => {
  return (
    <ul>
      {todos.map(({ id, text, completed }) => (
        <TodoItem
          key={id}
          completed={completed}
          text={text}
          toggleTodoCompleted={toggleTodoCompleted}
          deleteTodo={deleteTodo}
          id={id}
        />
      ))}
    </ul>
  );
};

export default PascalCase;

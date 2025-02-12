import { useState } from "react";
import { TodoContext } from "../../context/TodoContext";
import { SAMPLE_TODOS } from "../sample-todos";

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(SAMPLE_TODOS);

  const addTodos = (text) => {
    setTodos([{ id: crypto.randomUUID(), text, completed: false }, ...todos]);
  };

  const toggleTodoCompleted = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodos, toggleTodoCompleted, deleteTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

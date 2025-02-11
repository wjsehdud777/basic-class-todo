import styled from "styled-components";
import TodoItem from "./todo/TodoItem";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const PascalCase = () => {
  const { todos } = useContext(TodoContext);

  return (
    <TodoListSection>
      <TodoListHeader>Tasks</TodoListHeader>

      <TodoListContent>
        {todos.map(({ id, text, completed }) => (
          <TodoItem key={id} completed={completed} text={text} id={id} />
        ))}
      </TodoListContent>
    </TodoListSection>
  );
};

const TodoListSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TodoListHeader = styled.h2`
  font-size: 1.5ren;
  font-weight: bold;
`;

const TodoListContent = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default PascalCase;

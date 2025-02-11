import TodoForm from "./TodoForm";
import PascalCase from "../TodoList";
import TodoDashboard from "./TodoDashboard";
import styled from "styled-components";

const TodoContainer = () => {
  return (
    <TodoContainerWrapper>
      <TodoDashboard />
      <PascalCase />
      <TodoForm />
    </TodoContainerWrapper>
  );
};

const TodoContainerWrapper = styled.section`
  display: flex; //세로정렬
  flex-direction: column;
  gap: 3rem;
`;

export default TodoContainer;

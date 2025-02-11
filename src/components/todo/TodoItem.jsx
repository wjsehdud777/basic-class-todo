import { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../../context/TodoContext";

const TodoItem = ({ completed, text, id }) => {
  const { toggleTodoCompleted, deleteTodo } = useContext(TodoContext);

  return (
    <TodoItemWrapper>
      <TodoItemText $completed={completed}>{text}</TodoItemText>

      <TodoItemActions>
        <ActionButton
          onClick={() => toggleTodoCompleted(id)}
          $bgcolor={completed ? "#242424" : "#582be6"}
        >
          {completed ? "취소하기" : "완료하기"}
        </ActionButton>

        <ActionButton onClick={() => deleteTodo(id)} $bgcolor="#ff4033">
          삭제하기
        </ActionButton>
      </TodoItemActions>
    </TodoItemWrapper>
  );
};

const TodoItemWrapper = styled.li`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 1.25rem;
  border-radius: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const TodoItemText = styled.p`
  text-decoration: ${({ $completed }) =>
    $completed ? "line-through" : "none"};
`;

const TodoItemActions = styled.div`
  display: flex; //가로정렬
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const ActionButton = styled.button`
  background-color: ${({ $bgcolor = "#e6582b" }) => $bgcolor};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  word-break: keep-all;

  &:hover {
    opacity: 0.8;
  }
`;

export default TodoItem;

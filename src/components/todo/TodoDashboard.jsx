import { FileCheck, LaptopMinimal, Video } from "lucide-react";
import { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../../context/TodoContext";
import { Link, useSearchParams } from "react-router-dom";

const TodoDashboard = () => {
  const { getFilteredTodos } = useContext(TodoContext);
  const [searchParams] = useSearchParams();
  const selectedFilter = searchParams.get("filter");

  const all = getFilteredTodos().length;
  const completed = getFilteredTodos("completed").length;
  const pending = all - completed;

  return (
    <TodoDashboardSection>
      <TodoDashboardHeader>Quick Access</TodoDashboardHeader>
      <TodoDashboardCardList>
        <TodoDashboardCardWrapper $flex={2}>
          <TodoDashboardCard to="/" $selected={!selectedFilter}>
            <div>
              <FileCheck />
            </div>
            <TodoDashboardCardContent>
              {all} <br /> <span>All Tasks</span>
            </TodoDashboardCardContent>
          </TodoDashboardCard>
        </TodoDashboardCardWrapper>
        <TodoDashboardCardWrapper>
          <TodoDashboardCard
            to="?filter=completed"
            $bgColor="#582be6"
            $selected={selectedFilter === "completed"}
          >
            <div>
              <LaptopMinimal />
            </div>
            <TodoDashboardCardContent>
              {completed} <br /> <span>Completed Tasks</span>
            </TodoDashboardCardContent>
          </TodoDashboardCard>
        </TodoDashboardCardWrapper>
        <TodoDashboardCardWrapper>
          <TodoDashboardCard
            to="filter=pending"
            $bgColor="#242424"
            $selected={selectedFilter === "pending"}
          >
            <div>
              <Video />
            </div>
            <TodoDashboardCardContent>
              {pending} <br /> <span>Todo Task</span>
            </TodoDashboardCardContent>
          </TodoDashboardCard>
        </TodoDashboardCardWrapper>
      </TodoDashboardCardList>
    </TodoDashboardSection>
  );
};

const TodoDashboardSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem; // 16px
`;

const TodoDashboardHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

const TodoDashboardCardList = styled.ul`
  // 가로정렬
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`;

const TodoDashboardCardWrapper = styled.li`
  flex: ${({ $flex = 1 }) => $flex};
`;

const TodoDashboardCard = styled(Link)`
  // 세로정렬
  display: flex;
  flex-direction: column;
  /* flex: 1; */
  width: 100%;
  height: 184px;
  background-color: ${({ $bgColor = "#e6582b" }) => $bgColor};
  justify-content: space-between; // 정방향 사이의 공간
  color: white;
  padding: 1.25rem;
  border-radius: 1rem;
  cursor: pointer;
  text-decoration: ${({ $selected }) => ($selected ? "underline" : "none")};
`;

const TodoDashboardCardContent = styled.p`
  font-size: 1.25rem;
  font-weight: 600;

  span {
    font-size: 1rem;
    font-weight: 400;
  }
`;

export default TodoDashboard;

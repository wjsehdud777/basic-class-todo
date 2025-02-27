import { Link, useNavigate } from "react-router";
import {
  useDeleteTodoMutation,
  useToggleTodoMutation,
} from "../../hooks/useTodoQuery";

const TodoItem = ({ completed, text, id }) => {
  const navigate = useNavigate();

  const { mutate: toggleTodoMutate } = useToggleTodoMutation();
  const { mutate: deleteTodoMutate } = useDeleteTodoMutation();
  const navigateAfterDelete = (id) => {
    deleteTodoMutate(id);

    navigate("/");
  };

  return (
    <li className="flex flex-row flex-wrap justify-between items-center gap-4 bg-white p-5 rounded-2xl shadow-md">
      <Link
        className={`hover:underline ${completed ? "line-through" : ""}`}
        to={`/todos/${id}`}
      >
        {text}
      </Link>

      <div className="flex flex-row flex-wrap gap-2">
        <button
          className={`${completed ? "bg-[#242424]" : "bg-[#582be6]"}
        text-white px-4 py-2 rounded-lg hover:opacity-80 whitespace-nowrap text-center`}
          onClick={() => toggleTodoMutate({ id, completed })}
        >
          {completed ? "취소하기" : "완료하기"}
        </button>

        <button
          className="bg-[#ff4033] text-white px-4 py-2 rounded-lg hover:opacity-80 whitespace-nowrap text-center"
          onClick={() => navigateAfterDelete(id)}
        >
          삭제하기
        </button>
      </div>
    </li>
  );
};

export default TodoItem;

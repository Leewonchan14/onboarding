import { useLoaderData } from "react-router-dom";
import { Todo, TodoDetail, TodoList } from "../../../features/todo";

export default function TodoPage() {
  const { todos } = useLoaderData() as { todos: Todo[] };
  return (
    <div className="w-full h-full flex gap-8 items-center max-w-[800px] mx-auto">
      <TodoList todos={todos} />
      <TodoDetail todo={todos[0]} />
    </div>
  );
}

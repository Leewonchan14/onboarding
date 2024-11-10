import { useCallback, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Todo, TodoDetail, TodoList } from "../../../features/todo";

export default function TodoPage() {
  const { todos } = useLoaderData() as { todos: Todo[] };
  const [selectedTodo, setSelectedTodo] = useState<Todo | undefined>(undefined);

  const selectTodo = useCallback((todo: Todo | undefined) => {
    setSelectedTodo(todo);
  }, []);

  return (
    <div className="w-full h-full flex gap-8 items-center max-w-[800px] mx-auto">
      <TodoList
        todos={todos}
        selectTodo={selectTodo}
        selectedTodo={selectedTodo}
      />
      <TodoDetail todo={selectedTodo} />
    </div>
  );
}

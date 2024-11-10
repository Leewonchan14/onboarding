import { useCallback, useState } from "react";
import { useLoader } from "../../../shared/loaders";
import { MainButton } from "../../../shared/ui";
import todoPageLoader from "../loader/todoPageLoader";
import { Todo } from "../model/Todo";
import TodoDetail from "./TodoDetail";
import { TodoList } from "./TodoList";

export default function TodoPage() {
  const todos = useLoader<typeof todoPageLoader>();
  const [selectedTodo, setSelectedTodo] = useState<Todo | undefined>(undefined);

  const selectTodo = useCallback((todo: Todo | undefined) => {
    setSelectedTodo(todo);
  }, []);

  return (
    <div className="w-full h-full flex items-center gap-8 max-w-[800px] mx-auto">
      <div className="w-full h-full flex flex-col gap-4 py-10">
        <h1 className="text-2xl font-bold flex text-nowrap items-center">
          할 일 목록
          <MainButton
            text="추가"
            className="ml-auto text-lg !inline !w-auto p-0 px-4 py-2"
            // TODO Todo 할일 추가 기능 구현
            // onClick={async () => {
            //   create({ title: "새로운 할일", content: "..." });
            // }}
          />
        </h1>
        <TodoList
          todos={todos}
          selectTodo={selectTodo}
          selectedTodo={selectedTodo}
        />
      </div>
      <TodoDetail todo={selectedTodo} />
    </div>
  );
}

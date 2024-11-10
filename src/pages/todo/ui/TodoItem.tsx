import React from "react";
import { Todo } from "../model/Todo";

const TodoItem = React.memo(function TodoItem({
  isSelected,
  selectTodo,
  todo,
}: {
  todo: Todo;
  selectTodo: (todo?: Todo) => void;
  isSelected: boolean;
}) {
  // TODO TodoItem 기능 구현 해야함

  return (
    <div
      // TODO TodoItem 클릭시 선택 기능 구현
      onClick={() => {
        console.log("todo: ", todo);
        selectTodo(todo);
      }}
      className={`w-full flex flex-col gap-4 justify-between p-4 border rounded-lg ${
        isSelected && "bg-blue-600 text-white"
      }`}
    >
      <h1 className="text-xl font-bold">{todo.title}</h1>
      <p>{todo.content}</p>
    </div>
  );
});

export default TodoItem;

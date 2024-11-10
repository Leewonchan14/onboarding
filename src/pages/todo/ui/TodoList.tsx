import React from "react";
import { MainButton } from "../../../shared/ui";
import Todo from "../model/Todo";

export function TodoList({
  selectedTodo,
  todos,
  selectTodo,
}: {
  selectedTodo?: Todo;
  todos: Todo[];
  selectTodo: (todo?: Todo) => void;
}) {
  // TODO TodoList mutation 구현 해야함

  return (
    <div className="w-full h-full flex flex-col py-10 gap-4">
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
      <div className="overflow-y-auto flex flex-col gap-4 py-10">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            selectTodo={selectTodo}
            isSelected={selectedTodo?.id === todo.id}
          />
        ))}
      </div>
    </div>
  );
}

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
    <button
      // TODO TodoItem 클릭시 선택 기능 구현
      onClick={() => selectTodo(todo)}
      className={`w-full flex flex-col gap-4 justify-between p-4 border rounded-lg ${
        isSelected && "bg-blue-600 text-white"
      }`}
    >
      <h1 className="text-xl font-bold">{todo.title}</h1>
      <p>{todo.content}</p>
    </button>
  );
});

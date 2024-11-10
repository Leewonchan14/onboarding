import { Todo } from "../model/Todo";
import TodoItem from "./TodoItem";

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
    <div className="h-full overflow-auto flex flex-col gap-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          selectTodo={selectTodo}
          isSelected={selectedTodo?.id === todo.id}
        />
      ))}
    </div>
  );
}

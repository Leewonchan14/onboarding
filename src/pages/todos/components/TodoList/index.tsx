import { Todo } from '@/apis/todo.api';
import MainButton from '@/components/Button/MainButton';
import { TodosContext } from '@/pages/todos/contexts/useTodosContext';
import useCreateTodo from '@/pages/todos/hooks/useCreateTodo';
import useFetchTodo from '@/pages/todos/hooks/useFetchTodo';
import React, { useContext } from 'react';

export default function TodoList() {
  const context = useContext(TodosContext);
  const { isFetching, todos } = useFetchTodo();
  const { mutate: create } = useCreateTodo();

  if (isFetching || !todos || !context) return null;

  // const { selectTodo } = context;

  return (
    <div className="w-full h-full flex flex-col py-10 gap-4">
      <h1 className="text-2xl font-bold flex text-nowrap items-center">
        할 일 목록
        <MainButton
          text="추가"
          className="ml-auto text-lg !inline !w-auto p-0 px-4 py-2"
          onClick={async () => {
            create({ title: '새로운 할일', content: '...' });
          }}
        />
      </h1>
      <div className="overflow-y-auto flex flex-col gap-4 py-10">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}

const TodoItem = React.memo(function TodoItem({ todo }: { todo: Todo }) {
  const context = useContext(TodosContext);
  if (!context) return null;

  const { selectTodo, selectedTodo } = context;
  const isSelected = selectedTodo?.id === todo.id;

  return (
    <button
      onClick={() => selectTodo(todo)}
      className={`w-full flex flex-col gap-4 justify-between p-4 border rounded-lg ${isSelected && 'bg-blue-600 text-white'}`}
    >
      <h1 className="text-xl font-bold">{todo.title}</h1>
      <p>{todo.content}</p>
    </button>
  );
});

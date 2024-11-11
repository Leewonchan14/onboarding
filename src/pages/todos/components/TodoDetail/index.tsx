import MainButton from '@/components/Button/MainButton';
import TodoForm from '@/pages/todos/components/TodoForm';
import { TodosContext } from '@/pages/todos/contexts/useTodosContext';
import useRemoveTodo from '@/pages/todos/hooks/useRemoveTodo';
import useUpdateTodo from '@/pages/todos/hooks/useUpdateTodo';
import React, { useContext, useState } from 'react';

export default function TodoDetail() {
  const context = useContext(TodosContext);

  if (!context) return null;

  return (
    <div className="w-full flex flex-col gap-4">
      <h1 className="text-2xl font-bold">할 일 상세</h1>
      <Render />
    </div>
  );
}

const Render = () => {
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const { mutate: remove } = useRemoveTodo();
  const { mutate: update } = useUpdateTodo();
  const context = useContext(TodosContext);

  if (!context) return null;

  const { selectedTodo, selectTodo } = context;
  if (!selectedTodo) {
    return <p>할 일을 선택해주세요.</p>;
  }

  const onSubmit = ({
    title,
    content,
  }: {
    title: string;
    content: string;
  }) => {
    setIsUpdateMode(false);
    selectTodo({ ...selectedTodo, title, content });
    update({ id, title, content });
  };

  const { content, createdAt, title, updatedAt, id } = selectedTodo;

  return (
    <>
      <div className="w-full flex flex-col gap-2 p-4 border rounded-lg">
        {!isUpdateMode && (
          <>
            <h1 className="text-xl font-bold">{title}</h1>
            <p>{content}</p>
          </>
        )}
        {isUpdateMode && (
          <TodoForm title={title} content={content} onSubmit={onSubmit}>
            <div className="flex gap-4 h-12">
              <MainButton
                text="취소"
                className="py-0 bg-red-600"
                type="button"
                onClick={() => setIsUpdateMode(false)}
              />
              <MainButton text="확인" className="py-0" type="submit" />
            </div>
          </TodoForm>
        )}
        <p>생성일: {createdAt}</p>
        <p>수정일: {updatedAt}</p>
      </div>
      <div className="flex w-full gap-4">
        <Button
          text="수정"
          onClick={() => setIsUpdateMode(true)}
          className="!bg-blue-600"
        />

        <Button
          text="삭제"
          onClick={() => {
            remove(id);
            // {
            //   onSuccess: (_, __, { next }) => {
            //     selectTodo(next.at(-1) ?? null);
            //   },
            // }
          }}
        />
      </div>
    </>
  );
};

function Button({
  className,
  text,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.HTMLAttributes<HTMLButtonElement> & { text: string }) {
  return (
    <button
      className={`block rounded-xl w-full py-2 bg-red-600 text-white font-bold text-nowrap ${className}`}
      {...props}
    >
      {text}
    </button>
  );
}

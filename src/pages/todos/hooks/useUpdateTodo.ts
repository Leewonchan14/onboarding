import todoApi from '@/apis/todo.api';
import { useTodoHandler } from '@/pages/todos/hooks/useFetchTodo';
import { useMutation } from '@tanstack/react-query';

export default function useUpdateTodo() {
  const { getTodos, setTodos } = useTodoHandler();
  const { isPending, mutate } = useMutation({
    mutationKey: ['todos', 'update'],
    mutationFn: async ({
      id,
      title,
      content,
    }: {
      id: string;
      title: string;
      content: string;
    }) => {
      const { data } = await todoApi.update(id, title, content);
      return data.data;
    },
    onMutate: async ({ id, title, content }) => {
      const prev = getTodos();
      setTodos(
        prev?.map((t) =>
          t.id === id
            ? { ...t, title, content, updatedAt: new Date().toUTCString() }
            : t,
        ),
      );
    },
  });

  return { isPending, mutate };
}

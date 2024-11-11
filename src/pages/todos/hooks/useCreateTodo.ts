import todoApi, { Todo } from '@/apis/todo.api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useCreateTodo() {
  const queryClient = useQueryClient();

  const { isPending, mutate } = useMutation({
    mutationKey: ['todos', 'create'],
    mutationFn: async ({
      title,
      content,
    }: {
      title: string;
      content: string;
    }) => {
      const { data } = await todoApi.create(title, content);
      return data.data;
    },
    onMutate: async ({ title, content }) => {
      const previousValue = queryClient.getQueryData<Todo[]>(['todos'])!;
      const newId = new Date().toUTCString() + Math.random();
      queryClient.setQueryData<Todo[]>(
        ['todos'],
        [
          ...(previousValue ?? []),
          {
            title,
            content,
            id: newId,
            createdAt: new Date().toUTCString(),
            updatedAt: new Date().toUTCString(),
          },
        ],
      );
      return { previousValue, newId };
    },
    onSuccess: (todo, _, { newId }) => {
      queryClient.setQueryData<Todo[]>(['todos'], (prev) =>
        prev?.map((t) => (t.id === newId ? todo : t)),
      );
    },
    onError: (_, __, context) => {
      if (!context?.previousValue) return;
      queryClient.setQueryData(['todos'], context.previousValue);
    },
  });

  return { isPending, mutate };
}

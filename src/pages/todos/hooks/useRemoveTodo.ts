import todoApi, { Todo } from '@/apis/todo.api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useRemoveTodo() {
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationKey: ['todos', 'remove'],
    mutationFn: (id: string) => {
      return todoApi.remove(id);
    },
    onMutate: async (id: string) => {
      const prev = queryClient.getQueryData<Todo[]>(['todos']) ?? [];
      const next = prev.filter((todo) => todo.id !== id);

      queryClient.setQueryData(['todos'], next);

      return { prev, next };
    },
  });

  return { isPending, mutate };
}

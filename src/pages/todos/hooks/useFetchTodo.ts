import todoApi, { Todo } from '@/apis/todo.api';
import {
  SetDataOptions,
  Updater,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

export default function useFetchTodo() {
  const { isFetching, data: todos } = useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const { data } = await todoApi.findAll();
      return data.data;
    },
    staleTime: 1000 * 60,
  });

  return { isFetching, todos };
}

export function useTodoHandler() {
  const queryClient = useQueryClient();
  const getTodos = () => queryClient.getQueryData<Todo[]>(['todos']);
  const setTodos = (
    fn: Updater<Todo[] | undefined, Todo[] | undefined>,
    option?: SetDataOptions,
  ) => {
    queryClient.setQueryData<Todo[]>(['todos'], fn, option);
  };
  return { getTodos, setTodos };
}

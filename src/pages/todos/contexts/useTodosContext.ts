import { Todo } from '@/apis/todo.api';
import { createContext, useCallback, useState } from 'react';

export const TodosContext = createContext<ReturnType<
  typeof useTodosContext
> | null>(null);

interface StateType {
  selectedTodo: Todo | null;
}

export default function useTodosContext() {
  const [state, setState] = useState<StateType>({
    selectedTodo: null,
  });

  const selectTodo = useCallback((todo: Todo | null) => {
    setState((prev) => ({ ...prev, selectedTodo: todo }));
  }, []);

  return {
    ...state,
    selectTodo,
  };
}

import { useMutation } from "@tanstack/react-query";
import remove from "../api/remove";

export default function useRemoveTodo() {
  return useMutation({
    mutationKey: ["todos", "remove"],
    mutationFn: (id: string) => remove(id),

    // onMutate: async (id: string) => {
    //   const prev = queryClient.getQueryData<Todo[]>(["todos"]) ?? [];
    //   const next = prev.filter((todo) => todo.id !== id);

    //   queryClient.setQueryData(["todos"], next);

    //   return { prev, next };
    // },
  });
}

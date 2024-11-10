import { useMutation } from "@tanstack/react-query";
import { todoApi } from "../api";
import { TodoInput } from "../model/Todo";

export default function useUpdateTodo() {
  return useMutation({
    mutationKey: ["todos", "update"],
    mutationFn: async ({ id, title, content }: { id: string } & TodoInput) => {
      const { data } = await todoApi.update(id, title, content);
      return data.data;
    },
    // onMutate: async ({ id, title, content }) => {
    //   const prev = getTodos();
    //   setTodos(
    //     prev?.map((t) =>
    //       t.id === id
    //         ? { ...t, title, content, updatedAt: new Date().toUTCString() }
    //         : t,
    //     ),
    //   );
    // },
  });
}

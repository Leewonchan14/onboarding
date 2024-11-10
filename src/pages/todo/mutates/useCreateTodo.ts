import { useMutation } from "@tanstack/react-query";
import { TodoInput } from "../model/Todo";
import create from "../api/create";

export default function useCreateTodo() {
  return useMutation({
    mutationKey: ["todos", "create"],
    mutationFn: async ({ title, content }: TodoInput) => {
      const { data } = await create(title, content);
      return data.data;
    },
  });
}

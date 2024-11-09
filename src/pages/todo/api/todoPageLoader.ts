import { QueryClient } from "@tanstack/react-query";
import { todoQueryOption } from "../../../features/todo";

export default function todoPageLoader(queryClient: QueryClient) {
  return async () => {
    const { data } = await queryClient.ensureQueryData(
      todoQueryOption.findAllOption
    );
    return { todos: data.data };
  };
}

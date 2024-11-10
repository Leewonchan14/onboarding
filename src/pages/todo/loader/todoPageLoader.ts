import { QueryClient } from "@tanstack/react-query";
import { todoQueryOption } from "../queries/todoQueryOption";

export default function todoPageLoader(queryClient: QueryClient) {
  return async () => {
    const { data } = await queryClient.ensureQueryData(
      todoQueryOption.findAllOption
    );
    return data.data;
  };
}

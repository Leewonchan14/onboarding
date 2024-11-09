import { useQuery } from "@tanstack/react-query";
import { todoQueryOption } from "./todoQueryOption";

export default function useFetchTodo() {
  return useQuery(todoQueryOption.findAllOption);
}

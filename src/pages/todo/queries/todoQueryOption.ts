import { queryOptions } from "@tanstack/react-query";
import { todoApi } from "../api";

const findAllOption = queryOptions({
  queryKey: ["todos"],
  queryFn: todoApi.findAll,
  staleTime: 1000 * 60 * 5,
});

export const todoQueryOption = { findAllOption };

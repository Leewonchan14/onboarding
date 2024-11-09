import { queryOptions } from "@tanstack/react-query";
import { findAll } from "..";

const findAllOption = queryOptions({
  queryKey: ["todos"],
  queryFn: findAll,
  staleTime: 1000 * 60 * 5,
});

export const todoQueryOption = { findAllOption };

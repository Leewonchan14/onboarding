import { queryOptions } from "@tanstack/react-query";
import findAll from "../api/findAll";

const findAllOption = queryOptions({
  queryKey: ["todos"],
  queryFn: findAll,
  staleTime: 1000 * 60 * 5,
});

export const todoQueryOption = { findAllOption };

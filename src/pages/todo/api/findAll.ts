import { api } from "../../../shared/apis";
import { Todo } from "../model/Todo";

export default function findAll() {
  return api.request<{ data: Todo[] }>({
    url: "/todos",
    method: "GET",
  });
}

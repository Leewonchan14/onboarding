import { Todo } from "..";
import api from "../../../shared/apis";

export default function findAll() {
  return api.request<{ data: Todo[] }>({
    url: "/todos",
    method: "GET",
  });
}

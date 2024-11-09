import { Todo } from "..";
import api from "../../../shared/apis";

export default function create(title: string, content: string) {
  return api.request<{
    data: Todo;
  }>({
    method: "POST",
    url: "/todos",
    data: {
      title,
      content,
    },
  });
}

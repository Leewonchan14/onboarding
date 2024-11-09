import { Todo } from "..";
import api from "../../../shared/apis";

export default function update(id: string, title: string, content: string) {
  return api.request<{
    data: Todo;
  }>({
    method: "PUT",
    url: `/todos/${id}`,
    data: {
      title,
      content,
    },
  });
}

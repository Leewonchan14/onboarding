import { api } from "../../../shared/apis";
import { Todo } from "../model/Todo";

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

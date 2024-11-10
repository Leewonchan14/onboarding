import { api } from "../../../shared/apis";
import { Todo } from "../model/Todo";

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

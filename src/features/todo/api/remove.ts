import api from "../../../shared/apis";

export default function remove(id: string) {
  return api.request<{
    data: null;
  }>({
    method: "DELETE",
    url: `/todos/${id}`,
  });
}

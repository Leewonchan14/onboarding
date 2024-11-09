import { findAll } from "../../../features/todo";

export default async function todoPageLoader() {
  const { data } = await findAll();
  return { todos: data.data };
}

import { redirect } from "react-router-dom";
import { STORAGE_KEY } from "../config";

export default function privatePageLoader() {
  const token = localStorage.getItem(STORAGE_KEY);

  if (!token) {
    return redirect("/auth");
  }
}

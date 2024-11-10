import { redirect } from "react-router-dom";
import { STORAGE_KEY } from "../config";
import { AnyFunction } from "../libs";

export default function authLoader(loader: AnyFunction) {
  return (...args: unknown[]) => {
    const token = localStorage.getItem(STORAGE_KEY);

    if (!token) {
      return redirect("/auth");
    }

    return loader(...args);
  };
}

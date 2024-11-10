import { useLoaderData } from "react-router-dom";
import { AnyFunction, LoaderReturnType } from "../libs";

export const useLoader = <T extends AnyFunction>() => {
  const data = useLoaderData();
  if (!data) {
    throw new Error("loader 데이터를 찾을 수 없습니다.");
  }
  return data as LoaderReturnType<T>;
};

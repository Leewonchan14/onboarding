import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { AuthPage } from "../pages/auth";
import { TodoPage, todoPageLoader } from "../pages/todo";
import { queryClient } from "../shared/apis";
import { MainLayout } from "../shared/layouts";
import { authLoader } from "../shared/loaders";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route
          path=""
          element={<TodoPage />}
          loader={authLoader(todoPageLoader(queryClient))}
        />
      </Route>
      <Route path="/auth" element={<AuthPage />} />
    </>
  ),
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default router;

import { createBrowserRouter } from "react-router-dom";
import { AuthPage } from "../pages/auth";
import { TodoPage } from "../pages/todo";
import { MainLayout } from "../shared/layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ element: <TodoPage /> }],
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import { AuthPage } from "../pages/auth";
import { TodoPage } from "../pages/todo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoPage />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
]);

export default router;

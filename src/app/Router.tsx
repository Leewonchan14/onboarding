import { createBrowserRouter } from "react-router-dom";
import { AuthPage } from "../pages/auth";
import { TodoPage, todoPageLoader } from "../pages/todo";
import { MainLayout } from "../shared/layouts";
import { queryClient } from "./TanstackQueryProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <TodoPage />,
        loader: todoPageLoader(queryClient),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
]);

export default router;

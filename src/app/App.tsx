import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { TanstackQueryProvider } from "./TanstackQueryProvider";

function App() {
  return (
    <TanstackQueryProvider>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </TanstackQueryProvider>
  );
}

export default App;

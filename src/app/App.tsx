import { RouterProvider } from "react-router-dom";
import router from "./Router";
import TanstackQueryProvider from "./TanstackQueryProvider";

function App() {
  return (
    <TanstackQueryProvider>
      <RouterProvider router={router} />;
    </TanstackQueryProvider>
  );
}

export default App;

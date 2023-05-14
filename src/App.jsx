import { RouterProvider } from "react-router-dom";
import router from "./routers/router";

function App() {
  return (
    <div className="initApp">
      {/* Xem ở https://reactrouter.com/en/main/routers/router-provider */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

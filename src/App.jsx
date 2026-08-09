import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/store";
import router from "@/router/index.jsx";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;

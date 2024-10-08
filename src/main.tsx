import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes/routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { CookiesProvider } from "react-cookie";
import AuthProvider from "./Provider/AuthProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <CookiesProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </CookiesProvider>
    </Provider>
  </StrictMode>
);

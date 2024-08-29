import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes/routes";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { CookiesProvider } from "react-cookie";
import { PersistGate } from "redux-persist/integration/react";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <CookiesProvider>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <RouterProvider router={router} />
        {/* </PersistGate> */}
      </CookiesProvider>
    </Provider>
  </StrictMode>
);

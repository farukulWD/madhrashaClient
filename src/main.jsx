import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router.jsx";
import Main from "./Layout/Main.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  </RouterProvider>
);

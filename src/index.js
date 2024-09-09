import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/main.scss";
//
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Logement from "./pages/ProductPage";
//
import reportWebVitals from "./utils/reportWebVitals";

// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/logement/:id",
        element: <Logement />,
      },
    ],
  },
  {
    path: "/404",
    element: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import SOE from "./pages/SOE";
import DE from "./pages/DE";
import GK from "./pages/GK";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shadows",
    element: <SOE />,
  },
  {
    path: "/eisendrache",
    element: <DE />,
  },
  {
    path: "/krovi",
    element: <GK />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

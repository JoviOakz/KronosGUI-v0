import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import SOE from "./pages/SOE";
import TG from "./pages/TG";
import DE from "./pages/DE";
import ZS from "./pages/ZS";
import GK from "./pages/GK";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shadows-of-evil",
    element: <SOE />,
  },
  {
    path: "/the-giant",
    element: <TG />,
  },
  {
    path: "/der-eisendrache",
    element: <DE />,
  },
  {
    path: "/zetsubou-no-shima",
    element: <ZS />,
  },
  {
    path: "/gorod-krovi",
    element: <GK />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
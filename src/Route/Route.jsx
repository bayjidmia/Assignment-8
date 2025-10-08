import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Errorpage from "../Pages/Error/Errorpage";
import Home from "../Pages/Home/Home";
import Allapps from "../Pages/AllApps/Allapps";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        index: true,
        path: "/Home",
        loader: () => fetch("specialApp.json"),
        Component: Home,
      },

      {
        path: "/apps",
        loader: () => fetch("Allapps.json"),
        Component: Allapps,
      },
    ],
  },
]);

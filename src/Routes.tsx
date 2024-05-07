import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Gmailemail from "pages/Gmailemail";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "gmailemail",
      element: <Gmailemail />,
    },
  ]);

  return element;
};

export default ProjectRoutes;

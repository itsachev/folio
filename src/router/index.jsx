import { createBrowserRouter, Navigate } from "react-router-dom";

import Layout from "@/components/Layout.jsx";
import HomePage from "@/pages/HomePage/HomePage.jsx";
import AboutMe from "@/pages/AboutMe/AboutMe.jsx";
import ProjectDetails from "@/pages/ProjectDetails/ProjectDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutMe />,
      },
      {
        path: "projects/:projectId",
        element: <ProjectDetails />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

export default router;

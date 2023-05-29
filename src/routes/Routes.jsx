import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import ProjectsManagment from "../pages/Dashboard/ProjectsManagment/ProjectsManagment";
import AddProject from "../components/Dashboard/ProjectsManagments/AddProjects/AddProject";
import SelectTemplate from "../components/Dashboard/ProjectsManagments/AddProjects/SelectTemplate";
import AddDetails from "../components/Dashboard/ProjectsManagments/AddProjects/AddDetails";
import Preview from "../components/Dashboard/ProjectsManagments/AddProjects/Preview";
import Projects from "../components/Dashboard/ProjectsManagments/Projects/Projects";
import AddProjectLayout from "../components/Dashboard/ProjectsManagments/AddProjects/AddProjectLayout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "",
            element: <ProjectsManagment />,
            children: [
              {
                path: "projects",
                element: <Projects />,
              },
              {
                path: "add-project",
                element: <AddProjectLayout />,
                children: [
                  {
                    path: "",
                    element: <AddProject/>,
                  },
                  {
                    path: "select-template",
                    element: <SelectTemplate />,
                  },
                  {
                    path: "add-details",
                    element: <AddDetails/>,
                  },
                  {
                    path: "preview",
                    element: <Preview/>,
                  },
                  {
                    path: "*",
                    element: <h1>Not Found</h1>,
                  }
                ]
              }
            ]
          },
          {
            path: "services-managment",
            element: <h1>Services Managment</h1>,
          },
          {
            path: "blogs-managment",
            element: <h1>Blogs Managment</h1>,
          },
          {
            path: "skills-managment",
            element: <h1>Skills Managment</h1>,
          },
          {
            path: "gallery-managment",
            element: <h1>Gallery Managment</h1>,
          },
          {
            path: "authorized",
            element: <h1>Authorized</h1>,
          },
          {
            path: "*",
            element: <h1>Not Found</h1>,
          }
        ]
      }

    ],
  },
]);

export default router;
import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import Dashboard from "../pages/Dashboard/Dashboard";


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
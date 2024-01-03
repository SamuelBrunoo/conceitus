import { createBrowserRouter } from "react-router-dom"

import LoginPage from "../pages/login"
import Template from "../pages/_template"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    children: [
      {
        path: "",
        element: <Template page={"dashboard"} />,
      },
      {
        path: "dre",
        element: <Template page={"dre"} />,
      },
    ],
  },
])

export default routes

import { createBrowserRouter } from "react-router-dom"

import LoginPage from "../pages/login"


const routes = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <></>,
  },
])

export default routes

import React, { useEffect } from "react"
import Template from "../pages/_template"
import { Navigate, Outlet } from "react-router-dom"
import getStore from "../store"

const AuthRoute = () => {
  const { user } = getStore((store) => store)

  useEffect(() => {
    console.log("user", user)
  }, [user])

  return user.isAuth ? (
    <Template>
      <Outlet />
    </Template>
  ) : (
    <Navigate to={"/login"} />
  )
}

export default AuthRoute

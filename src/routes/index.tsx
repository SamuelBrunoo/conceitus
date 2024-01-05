import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import LoginPage from "../pages/login"

import Dash from "../pages/Dash"
import DRE from "../pages/DRE"
import AuthRoute from "./authroute"
import Entries from "../pages/Entries"
import Members from "../pages/Members"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/dashboard" element={<AuthRoute />}>
          <Route path="" element={<Dash />} />
          <Route path="dre" element={<DRE />} />
          <Route path="entries" element={<Entries />} />
          <Route path="members" element={<Members />} />
        </Route>

        {/* sys routes */}
        <Route path="/" element={<Navigate to={"/dashboard"} />} />
        <Route path="*" element={<Navigate to={"/dashboard"} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router

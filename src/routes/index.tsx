import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import LoginPage from "../pages/login"

import Dash from "../pages/Dash"
import DRE from "../pages/DRE"
import AuthRoute from "./authroute"
import Entries from "../pages/Entries"
import Members from "../pages/Members"
import Settings from "../pages/Settings"
import CompSettingsPage from "../pages/Settings/company"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/" element={<AuthRoute />}>
          <Route path="dashboard">
            <Route path="" element={<Dash />} />
            <Route path="dre" element={<DRE />} />
            <Route path="entries" element={<Entries />} />
            <Route path="members" element={<Members />} />
          </Route>

          <Route path="settings" element={<Settings />}>
            <Route path="company" element={<CompSettingsPage />} />
            <Route path="user" element={<CompSettingsPage />} />
          </Route>
        </Route>

        {/* sys routes */}
        <Route path="/" element={<Navigate to={"/dashboard"} />} />
        <Route path="*" element={<Navigate to={"/dashboard"} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router

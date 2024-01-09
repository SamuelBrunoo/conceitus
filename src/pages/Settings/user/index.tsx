import React, { useEffect, useState } from "react"
import * as S from "../styles"

import SettingsHeader from "../../../components/SettingsHeader"
import { Outlet, useLocation } from "react-router-dom"

type TSubScreens = "data" | "config" | "entries"

const UserSettingsPage = () => {
  const location = useLocation()

  const [screen, setScreen] = useState<TSubScreens>("data")

  useEffect(() => {
    console.log(location)
    const routePaths = location.pathname.split("/")
    const actualPage = routePaths[routePaths.length - 1]
    if (["data", "config", "entries"].includes(actualPage))
      setScreen(actualPage as TSubScreens)
  }, [location])

  return (
    <S.Content>
      <SettingsHeader
        screen={screen}
        changeScreen={setScreen}
        title="Nome Sobrenome"
        subtitle="nome.sobrenome@gmail.com"
        button={[
          {
            title: "Salvar",
            type: "primary",
            action: () => {},
          },
        ]}
        personalView={true}
      />
      <Outlet />
    </S.Content>
  )
}

export default UserSettingsPage

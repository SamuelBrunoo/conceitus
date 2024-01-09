import React, { useState } from "react"
import * as S from "./styles"

import SettingsHeader from "../../../components/SettingsHeader"
import RegDataScreen from "./regData"
import ConfigScreen from "./config"
import EntriesScreen from "./entries"

const CompSettingsPage = () => {
  const [screen, setScreen] = useState<"data" | "config" | "entries">("data")

  const renderContent = () => {
    switch (screen) {
      case "data":
        return <RegDataScreen />
      case "config":
        return <ConfigScreen />
      case "entries":
        return <EntriesScreen />
    }
  }

  return (
    <S.Content>
      <SettingsHeader
        screen={screen}
        changeScreen={setScreen}
        title="Nome Sobrenome"
        subtitle="nome.sobrenome@gmail.om"
        button={[
          {
            title: "Salvar",
            type: "primary",
            action: () => {},
          },
        ]}
      />

      {renderContent()}
    </S.Content>
  )
}

export default CompSettingsPage

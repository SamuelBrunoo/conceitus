import React from "react"
import * as S from "./styles"
import Button from "../Button"

import * as Icons from "../../utils/imports/icons"
import { useNavigate } from "react-router-dom"

type TScreens = "data" | "config" | "entries"

type Props = {
  screen: TScreens
  changeScreen: React.Dispatch<React.SetStateAction<TScreens>>
  bigger?: boolean
  title: string
  subtitle?: string
  button?: {
    type: "primary" | "secondary" | "tertiary"
    title: string
    action: (value?: any) => void
  }[]
  personalView?: boolean
}

const SettingsHeader = ({
  screen,
  changeScreen,
  bigger,
  title,
  subtitle,
  button,
  personalView,
}: Props) => {
  const navigate = useNavigate()

  const handleTab = (screen: TScreens) => {
    if (personalView) navigate(`/settings/user/${screen}`)
    changeScreen(screen)
  }

  const getBack = () => {
    navigate(-1)
  }

  return (
    <S.HeaderControl>
      <S.HeaderContent className={bigger ? "bigger" : ""}>
        <S.HeaderTop>
          <S.HeaderLeft>
            <S.ProfileBox />
            <S.ProfileInfo>
              <S.ProfileName>{title}</S.ProfileName>
              <S.ProfileDesc>{subtitle}</S.ProfileDesc>
            </S.ProfileInfo>
          </S.HeaderLeft>
          {button && (
            <S.HeaderRight>
              {button.map((b, k) => (
                <Button
                  key={k}
                  title={b.title}
                  type={b.type}
                  action={b.action}
                />
              ))}
            </S.HeaderRight>
          )}
        </S.HeaderTop>
        <S.TabsArea>
          {!personalView && (
            <S.BackBtn onClick={getBack}>
              <Icons.ArrowStrip width={24} height={24} />
            </S.BackBtn>
          )}
          <S.ScreenTab
            $active={screen === "data"}
            onClick={() => handleTab("data")}
          >
            {personalView && <Icons.AccountCircle width={24} height={24} />}
            <span>Dados cadastrais</span>
          </S.ScreenTab>
          <S.ScreenTab
            $active={screen === "config"}
            onClick={() => handleTab("config")}
          >
            {personalView && <Icons.SettingsFilled width={24} height={24} />}
            <span>Configuração</span>
          </S.ScreenTab>
          <S.ScreenTab
            $active={screen === "entries"}
            onClick={() => handleTab("entries")}
          >
            {personalView && <Icons.BookFilled width={24} height={24} />}
            <span>{personalView ? "Histórico de atividades" : "Entradas"}</span>
          </S.ScreenTab>
        </S.TabsArea>
      </S.HeaderContent>
    </S.HeaderControl>
  )
}

export default SettingsHeader

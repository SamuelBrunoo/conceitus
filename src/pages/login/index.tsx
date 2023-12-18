import { useState } from "react"
import * as S from "./styles"

import AuthPage from "./userAuth"
import CompanySelectPage from "./companySelect"

const LoginPage = () => {
  const [showing, setShowing] = useState(true)
  const [display, setDisplay] = useState<"auth" | "select">("auth")

  const changeDisplay = () => {
    setShowing(false)
    setTimeout(() => {
      if (display === "auth") setDisplay("select")
      else setDisplay("auth")
      setTimeout(() => setShowing(true), 200)
    }, 500)
  }

  const renderDisplay = () => {
    return display === "auth" ? (
      <AuthPage changeDisplay={changeDisplay} />
    ) : (
      <CompanySelectPage changeDisplay={changeDisplay} />
    )
  }

  return (
    <S.Page className="withBg">
      <S.Container isAuthing={display === "auth"} showing={showing}>
        <S.Content isAuthing={display === "auth"}>{renderDisplay()}</S.Content>
      </S.Container>
      <S.CompanyLinks>
        <S.DiscretLink href={"/"}>Entre em contato</S.DiscretLink>
        <S.DiscretLink href={"/"}>Privacidade</S.DiscretLink>
        <S.DiscretLink href={"/"}>Termos</S.DiscretLink>
      </S.CompanyLinks>
    </S.Page>
  )
}

export default LoginPage

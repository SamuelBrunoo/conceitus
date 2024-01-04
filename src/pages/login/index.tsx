import { useState } from "react"
import * as S from "./styles"

import AuthPage from "./userAuth"
import CompanySelectPage from "./companySelect"
import { useNavigate } from "react-router-dom"
import LoadingOverlay from "../../components/_loadingoverlay"
import getStore from "../../store"

const LoginPage = () => {
  const navigation = useNavigate()
  const { user } = getStore()

  const [loading, setLoading] = useState(false)
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
      <CompanySelectPage
        changeDisplay={changeDisplay}
        handleSignIn={handleSignIn}
      />
    )
  }

  const handleSignIn = async (company?: any) => {
    setLoading(true)

    // ...
    setTimeout(() => {
      user.setAuth(true)
      navigation("/dashboard")
      setLoading(false)
    }, 3000)
  }

  return (
    <>
      <LoadingOverlay visible={loading} />
      <S.Page className="withBg">
        <S.Container isAuthing={display === "auth"} showing={showing}>
          <S.Content isAuthing={display === "auth"}>
            {renderDisplay()}
          </S.Content>
        </S.Container>
        <S.CompanyLinks>
          <S.DiscretLink href={"/"}>Entre em contato</S.DiscretLink>
          <S.DiscretLink href={"/"}>Privacidade</S.DiscretLink>
          <S.DiscretLink href={"/"}>Termos</S.DiscretLink>
        </S.CompanyLinks>
      </S.Page>
    </>
  )
}

export default LoginPage

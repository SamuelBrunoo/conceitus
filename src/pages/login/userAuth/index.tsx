import * as S from "./styles"
import * as Icons from "../../../utils/imports/icons"
import { useState } from "react"

type Props = {
  changeDisplay: () => void
}

const AuthPage = ({ changeDisplay }: Props) => {
  const [showPass, setShowPass] = useState(false)

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({
    userName: { state: false, message: "Nome ou e-mail inválido" },
    password: { state: false, message: "Senha incorreta" },
  })

  const handleSubmit = () => {
    // submit data

    // handling errors
    // simulated success ...

    // change display
    changeDisplay()
  }

  const cleanErrors = () => {
    if (errors.userName.state || errors.password.state) {
      setErrors({
        userName: { ...errors.userName, state: false },
        password: { ...errors.password, state: false },
      })
    }
  }

  const handleField = (field: "userName" | "password", value: string) => {
    switch (field) {
      case "userName":
        setUserName(value)
        break
      case "password":
        setPassword(value)
        break
    }

    cleanErrors()
  }

  const renderBtnMessage = () => {
    return errors.userName.state
      ? errors.userName.message
      : errors.password.state
      ? errors.password.message
      : "Entrar"
  }

  return (
    <>
      <Icons.LogoDark />
      <S.FormArea>
        <S.InputBox>
          <S.LoginInput
            placeholder="Login"
            value={userName}
            onChange={(e) => handleField("userName", e.target.value)}
          />
        </S.InputBox>
        <S.InputBox>
          <S.LoginInput
            placeholder="Senha"
            value={password}
            type={showPass ? "text" : "password"}
            onChange={(e) => handleField("password", e.target.value)}
          />
          {showPass ? (
            <Icons.Show width={20} onClick={() => setShowPass(false)} />
          ) : (
            <Icons.Hide width={20} onClick={() => setShowPass(true)} />
          )}
        </S.InputBox>
        <S.SubmitButton
          onClick={handleSubmit}
          disabled={userName.trim() === "" || password.trim() === ""}
          errorState={errors.userName.state || errors.password.state}
        >
          {renderBtnMessage()}
        </S.SubmitButton>
        <S.DiscretLink href={"/"}>Esqueci minha senha</S.DiscretLink>
      </S.FormArea>
    </>
  )
}

export default AuthPage

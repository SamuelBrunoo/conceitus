import React from "react"
import * as S from "./styles"

export type TButtons = "primary" | "secondary" | "tertiary" | "delete" | "update"

type Props = {
  type: TButtons
  title: string
  action: () => any
}

const Button = ({ type, title, action }: Props) => {
  const handlePress = () => {
    action()
  }

  return (
    <S.Btn type={type} onClick={handlePress}>
      <S.BtnText type={type}>{title}</S.BtnText>
    </S.Btn>
  )
}

export default Button

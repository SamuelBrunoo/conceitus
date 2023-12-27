import React from "react"
import * as S from "./styles"

type Props = {
  type: 'primary' | 'secondary' | 'tertiary'
  title: string
  action: () => any
}

const Button = ({ type, title, action }: Props) => {
  const handlePress = () => {
    action()
  }

  return (
    <S.Btn type={type} onClick={handlePress}>
      <S.BtnText>{title}</S.BtnText>
    </S.Btn>
  )
}

export default Button

import React from "react"
import * as S from "./styles"
import Button from "../Button"

type Props = {
  bigger?: boolean
  title: string
  button?: {
    type: "primary" | "secondary" | "tertiary"
    title: string
    action: (value?: any) => void
  }[]
}

const PageTitle = ({ bigger, title, button }: Props) => {
  return (
    <S.HeaderControl>
      <S.HeaderContent className={bigger ? "bigger" : ""}>
        <S.HeaderLeft>
          <S.PageTitle>{title}</S.PageTitle>
        </S.HeaderLeft>
        {button && (
          <S.HeaderRight>
            {button.map((b, k) => (
              <Button key={k} title={b.title} type={b.type} action={b.action} />
            ))}
          </S.HeaderRight>
        )}
      </S.HeaderContent>
    </S.HeaderControl>
  )
}

export default PageTitle

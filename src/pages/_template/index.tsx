import React from "react"
import { TPages } from "../../utils/@types/routes"
import Dash from "../Dash"
import Header from "../../components/Header"
import * as S from "./styles"

type Props = {
  page: TPages
}

const Template = ({ page }: Props) => {
  const renderPage = () => {
    switch (page) {
      case "dashboard":
        return <Dash />
    }
  }

  return (
    <S.Page>
      <Header userLevel={3} />
      <S.Wrapper>
        <S.Container>
          {renderPage()}
        </S.Container>
      </S.Wrapper>
    </S.Page>
  )
}

export default Template

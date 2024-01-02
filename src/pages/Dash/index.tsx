import React from "react"
import * as S from "./styles"
import DashCard from "../../components/DashCard"

import * as Icons from "../../utils/imports/icons"

const Dash = () => {
  return (
    <S.Content>
      <S.Section>
        <S.SectionHeader>
          <S.SHDetails>
            <S.STitle>DRE</S.STitle>
            <S.SDescription>Descrição do serviço</S.SDescription>
          </S.SHDetails>
          <Icons.MoreIcon width={24} />
        </S.SectionHeader>
        <S.SectionContent>
          <S.SRow>
            <DashCard />
            <DashCard />
            <DashCard />
            <DashCard />
          </S.SRow>
          <S.SRow>
            <DashCard />
            <DashCard />
            <DashCard />
          </S.SRow>
        </S.SectionContent>
      </S.Section>
      <S.Section>
        <S.SectionHeader>
          <S.SHDetails>
            <S.STitle>Fluxo de caixa</S.STitle>
            <S.SDescription>Descrição do outro serviço</S.SDescription>
          </S.SHDetails>
          <Icons.MoreIcon width={24} />
        </S.SectionHeader>
        <S.SectionContent>
          <S.SRow>
            <DashCard />
            <DashCard />
          </S.SRow>
          <S.SRow>
            <DashCard />
            <DashCard />
            <DashCard />
            <DashCard />
          </S.SRow>
        </S.SectionContent>
      </S.Section>
    </S.Content>
  )
}

export default Dash

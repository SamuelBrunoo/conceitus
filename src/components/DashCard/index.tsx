import React from "react"
import * as S from "./styles"

import * as Icons from "../../utils/imports/icons"

const DashCard = () => {


  return (
    <S.Card>
      <S.CardHeader>
        <S.HeaderTexts>
          <S.CardTitle>Título do card</S.CardTitle>
          <S.CardDescription>Descrição do card</S.CardDescription>
        </S.HeaderTexts>
        <Icons.Expand width={24} />
      </S.CardHeader>
      <S.DataArea>
        {/* ... */}
      </S.DataArea>
    </S.Card>
  )

}

export default DashCard

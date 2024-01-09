import React from "react"
import * as S from "./styles"

import Select from "../../../../components/Select"
import Button from "../../../../components/Button"
import { ProfilesRO } from "../../../../utils/_sys/profiles"
import ConfigExpand from "../../../../components/ConfigExpand"

const ConfigScreen = () => {
  return (
    <>
      <S.Form>
        <S.FBlock>
          <S.BlockTitle>Configuração</S.BlockTitle>
          <S.BlockRow>
            <Select.Default
              label="Perfil de acesso"
              onChange={() => {}}
              roOptions={ProfilesRO["users"]}
              value={null}
            />
            <S.ButtonsArea>
              <Button type="delete" title="Bloquear login" action={() => {}} />
              <Button type="update" title="Resetar senha" action={() => {}} />
            </S.ButtonsArea>
          </S.BlockRow>
        </S.FBlock>

        <S.FBlock>
          <S.BlockTitle>Permissões & Visibilidade</S.BlockTitle>
          <S.BlockRow>
            <ConfigExpand />
          </S.BlockRow>
          <S.BlockRow>
            <ConfigExpand />
          </S.BlockRow>
        </S.FBlock>

        <Button type="delete" title="Remover" action={() => {}} />
      </S.Form>
    </>
  )
}

export default ConfigScreen

import * as S from "./styles"
import { LogoBlue, InfoCircle, Arrow, Search } from "../../../utils/imports/icons"
import { useState } from "react"

const falseData = [
  {
    id: 1,
    corporateReason: "Nome da empresa",
    email: "nome.sobrenome@empresa.com",
    registerCode: "xx.xxx.xxx/0001-xx",
    stateIncription: "xx.xxx.xxxx-x",
  },
  {
    id: 2,
    corporateReason: "Nome da empresa",
    email: "nome.sobrenome@empresa.com",
    registerCode: "xx.xxx.xxx/0001-xx",
    stateIncription: "xx.xxx.xxxx-x",
  },
  {
    id: 3,
    corporateReason: "Nome da empresa",
    email: "nome.sobrenome@empresa.com",
    registerCode: "xx.xxx.xxx/0001-xx",
    stateIncription: "xx.xxx.xxxx-x",
  },
]

type Props = {
  changeDisplay: () => void
}

const CompanySelectPage = ({ changeDisplay }: Props) => {
  const handleOut = () => {
    changeDisplay()
  }

  return (
    <>
      <LogoBlue />
      <S.TableArea>
        <S.Table>
          <S.THead>
            <tr>
              <S.Th>Nome da empresa</S.Th>
              <S.Th>Email</S.Th>
              <S.Th>CNPJ/CPF</S.Th>
              <S.Th>Insc. Estadual</S.Th>
              <S.Th>
                <S.SearchBox>
                  <S.SearchInput
                    placeholder={"Buscar"}
                  />
                  <S.SearchActionBtn>
                    <Search width={24} />
                  </S.SearchActionBtn>
                </S.SearchBox>
              </S.Th>
            </tr>
          </S.THead>
          <S.TBody>
            {falseData.map((d, k) => (
              <>
                <S.Row>
                  <S.Td>{d.corporateReason}</S.Td>
                  <S.Td>{d.email}</S.Td>
                  <S.Td>{d.registerCode}</S.Td>
                  <S.Td>{d.stateIncription}</S.Td>
                  <S.Td>
                    <S.EnterButton>
                      <span>Entrar</span>
                      <Arrow width={24} />
                    </S.EnterButton>
                  </S.Td>
                </S.Row>
                <tr style={{ height: 8 }}></tr>
              </>
            ))}
          </S.TBody>
        </S.Table>
        <S.Bottom>
          <S.OutButton onClick={handleOut}>Sair</S.OutButton>
          <S.Pagination>
            <Arrow />
            <S.PaginationItem active={false}>2</S.PaginationItem>
            <S.PaginationItem active={true}>3</S.PaginationItem>
            <S.PaginationItem active={false}>4</S.PaginationItem>
            <Arrow />
          </S.Pagination>
        </S.Bottom>
      </S.TableArea>
    </>
  )
}

export default CompanySelectPage

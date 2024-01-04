import React, { useState } from "react"
import * as S from "./styles"

import * as Icons from "../../utils/imports/icons"

import Input from "../../components/Input"
import Select from "../../components/Select"
import Dropdown from "../../components/Dropdown"
import { fEntries } from "../../utils/_falseData/entries"

const Entries = () => {
  const [searchFilter, setSearchFilter] = useState("")

  return (
    <S.Content>
      <S.HeaderControl>
        <S.HeaderContent>
          <S.HeaderLeft>
            <S.PageTitle>Entradas</S.PageTitle>
          </S.HeaderLeft>
        </S.HeaderContent>
      </S.HeaderControl>

      <S.FilterArea>
        <S.FASearch>
          <Input.Search
            value={searchFilter}
            onChange={setSearchFilter}
            placeholder="Pesquisar"
          />
        </S.FASearch>
        <S.FACompanies>
          <S.FACompany />
          <S.FACompany />
          <S.FACompany />
          <S.FACompany />
          <S.FACompany />
          <S.FACompany>
            <span>+5</span>
          </S.FACompany>
        </S.FACompanies>
        <Select.Filter
          label={"Valor"}
          options={[]}
          value={null}
          onChange={() => {}}
        />

        <Select.Filter
          label={"Tipo"}
          options={[]}
          value={null}
          onChange={() => {}}
        />

        <Select.Filter
          label={"Família"}
          options={[]}
          value={null}
          onChange={() => {}}
        />

        <Select.Filter
          label={"Grupo"}
          options={[]}
          value={null}
          onChange={() => {}}
        />

        <Dropdown.Date label={"Data"} value={null} onChange={() => {}} />

        <S.FilterBtn>
          <span>Limpar filtros</span>
        </S.FilterBtn>

        <S.FilterBtn>
          <span>Salvar filtro</span>
        </S.FilterBtn>

        <Select.Filter
          label={"Mais"}
          options={[]}
          value={null}
          onChange={() => {}}
          nobg={true}
        />
      </S.FilterArea>

      <S.Table>
        <S.THead>
          <S.THCol>
            <span>MÓDULO</span>
          </S.THCol>
          <S.THCol>
            <span>ID</span>
          </S.THCol>
          <S.THCol>
            <span>TÍTULO</span>
          </S.THCol>
          <S.THCol>
            <span>VALOR</span>
          </S.THCol>
          <S.THCol>
            <span>TIPO</span>
          </S.THCol>
          <S.THCol>
            <span>FAMÍLIA</span>
          </S.THCol>
          <S.THCol>
            <span>GRUPO</span>
          </S.THCol>
          <S.THCol>
            <span>REPORTER</span>
          </S.THCol>
          <S.THCol>
            <span>DATA / HORA</span>
          </S.THCol>
        </S.THead>
        <S.TBody>
          {fEntries.map((e, k) => (
            <S.TRow>
              <S.TData>
                <S.ModuleBox>
                  <span>{e.module}</span>
                </S.ModuleBox>
              </S.TData>
              <S.TData>
                <S.IdTxt>{e.id}</S.IdTxt>
              </S.TData>
              <S.TData>
                <S.DefaultData>{e.titulo}</S.DefaultData>
              </S.TData>
              <S.TData>
                <S.DefaultData>{e.value}</S.DefaultData>
              </S.TData>
              <S.TData>
                <S.DefaultData>{e.type}</S.DefaultData>
              </S.TData>
              <S.TData>
                <S.DefaultData>{e.family}</S.DefaultData>
              </S.TData>
              <S.TData>
                <S.DefaultData>{e.group}</S.DefaultData>
              </S.TData>
              <S.TData>
                <S.ReporterBox>
                  <S.RPic />
                  <S.RName>{e.reporter.name}</S.RName>
                </S.ReporterBox>
              </S.TData>
              <S.TData>
                <S.DefaultData>{e.date}</S.DefaultData>
              </S.TData>
            </S.TRow>
          ))}
        </S.TBody>
      </S.Table>

      {fEntries.length > 12 && (
        <S.Pagination>
          <Icons.Arrow />
          <S.PaginationItem active={false}>2</S.PaginationItem>
          <S.PaginationItem active={true}>3</S.PaginationItem>
          <S.PaginationItem active={false}>4</S.PaginationItem>
          <Icons.Arrow />
        </S.Pagination>
      )}
    </S.Content>
  )
}

export default Entries

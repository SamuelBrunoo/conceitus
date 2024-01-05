import React, { useState } from "react"
import * as S from "./styles"

import * as Icons from "../../utils/imports/icons"

import Input from "../../components/Input"
import Select from "../../components/Select"
import Dropdown from "../../components/Dropdown"
import { fEntries } from "../../utils/_falseData/entries"
import { entriesTable } from "../../utils/_sys/tables/entriestable"
import PageTitle from "../../components/PageTitle"

const Entries = () => {
  const [searchFilter, setSearchFilter] = useState("")

  return (
    <S.Content>
      <PageTitle title="Entradas" />

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
          <tr>
            {entriesTable.columns.map((col, k) => (
              <S.THCol key={k}>
                <span>{col.title}</span>
              </S.THCol>
            ))}
          </tr>
        </S.THead>
        <S.TBody>
          {fEntries.map((e, k) => (
            <S.TRow key={k}>
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
          <S.PaginationItem className={false ? "active" : ""}>
            2
          </S.PaginationItem>
          <S.PaginationItem className={true ? "active" : ""}>
            3
          </S.PaginationItem>
          <S.PaginationItem className={false ? "active" : ""}>
            4
          </S.PaginationItem>
          <Icons.Arrow />
        </S.Pagination>
      )}
    </S.Content>
  )
}

export default Entries

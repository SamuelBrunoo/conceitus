import React, { useState } from "react"
import * as S from "./styles"

import * as Icons from "../../../../utils/imports/icons"

import Select from "../../../../components/Select"
import Input from "../../../../components/Input"
import Dropdown from "../../../../components/Dropdown"
import { ChargesRO } from "../../../../utils/_sys/charges"
import EntriesExpand from "../../../../components/EntriesExpand"
import { parseDate } from "../../../../utils/toolbox/parsers/date"

const fEntriesQt = 4

const EntriesScreen = () => {
  const [searchFilter, setSearchFilter] = useState("")
  const [date] = useState(new Date())

  return (
    <S.Content>
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
        <S.SelectContainer>
          <Select.Multiple
            label={"Valor"}
            roOptions={ChargesRO["users"]}
            value={null}
            onChange={() => {}}
          />
        </S.SelectContainer>
        <S.SelectContainer>
          <Select.Multiple
            label={"Tipo"}
            roOptions={ChargesRO["users"]}
            value={null}
            onChange={() => {}}
          />
        </S.SelectContainer>
        <S.SelectContainer>
          <Select.Multiple
            label={"Família"}
            roOptions={ChargesRO["users"]}
            value={null}
            onChange={() => {}}
          />
        </S.SelectContainer>
        <S.SelectContainer>
          <Select.Multiple
            label={"Grupo"}
            roOptions={ChargesRO["users"]}
            value={null}
            onChange={() => {}}
          />
        </S.SelectContainer>

        <Dropdown.Date
          label={parseDate(date, "ddm")}
          value={date}
          onChange={() => {}}
        />

        <S.FilterBtn>
          <span>Limpar filtros</span>
        </S.FilterBtn>

        <S.FilterBtn>
          <span>Salvar filtro</span>
        </S.FilterBtn>

        <Dropdown.MoreTexted
          label={"Mais"}
          options={[
            {
              text: "Ação 1",
              fn: () => {},
            },
            {
              text: "Ação 2",
              fn: () => {},
            },
          ]}
        />
      </S.FilterArea>

      <S.List>
        <EntriesExpand />
        <EntriesExpand />
        <EntriesExpand />
      </S.List>

      {fEntriesQt > 4 && (
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

export default EntriesScreen

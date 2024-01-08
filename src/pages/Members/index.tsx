import React, { useState } from "react"
import * as S from "./styles"

import * as Icons from "../../utils/imports/icons"

import Input from "../../components/Input"
import Select from "../../components/Select"
import Dropdown from "../../components/Dropdown"
import PageTitle from "../../components/PageTitle"
import { tables } from "../../utils/_sys"
import { fMembers } from "../../utils/_falseData/members"

const Members = () => {
  const [searchFilter, setSearchFilter] = useState("")

  return (
    <S.Content>
      <PageTitle
        title="Lista dos membros"
        button={[
          {
            title: "Novo membro",
            type: "primary",
            action: () => {},
          },
        ]}
      />

      <S.FilterArea>
        <S.FASearch>
          <Input.Search
            value={searchFilter}
            onChange={setSearchFilter}
            placeholder="Pesquisar"
          />
        </S.FASearch>
        <Select.Filter
          label={"Responsabilidade"}
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

        <Dropdown.Date label={"Filtro 3:"} value={null} onChange={() => {}} />

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

      <S.RolesSections>
        <S.RolesSection>
          <S.RSHeader>
            <S.RSTitle>Membros, Colaboradores</S.RSTitle>
            <S.RSDescription>
              O Demonstração do Resultado do Exercício é um resumo das operações
              financeiras da empresa em um determinado período de tempo para
              deixar claro se ela teve lucro ou prejuízo.
            </S.RSDescription>
          </S.RSHeader>
          <S.Table>
            <S.THead>
              <tr>
                {tables.members.columns.map((col, k) => (
                  <S.THCol key={k}>
                    <span>{col.title}</span>
                  </S.THCol>
                ))}
              </tr>
            </S.THead>
            <S.TBody>
              {fMembers.responsables.map((m, k) => (
                <S.TRow key={k}>
                  <S.TData>
                    <S.ReporterBox>
                      <S.RPic />
                      <S.RName>{m.name}</S.RName>
                    </S.ReporterBox>
                  </S.TData>
                  <S.TData>
                    <S.DefaultData>{m.level}</S.DefaultData>
                  </S.TData>
                  <S.TData>
                    <S.DefaultData>{m.profile}</S.DefaultData>
                  </S.TData>
                  <S.TData>
                    <S.DefaultData>{m.telephone}</S.DefaultData>
                  </S.TData>
                  <S.TData>
                    <S.DefaultData>
                      {m.modules.map((mod) => mod.title).join(", ")}
                    </S.DefaultData>
                  </S.TData>
                </S.TRow>
              ))}
            </S.TBody>
          </S.Table>

          {fMembers.responsables.length > 12 && (
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
        </S.RolesSection>
        <S.RolesSection>
          <S.RSHeader>
            <S.RSTitle>Responsáveis</S.RSTitle>
            <S.RSDescription>
              O Demonstração do Resultado do Exercício é um resumo das operações
              financeiras da empresa em um determinado período de tempo para
              deixar claro se ela teve lucro ou prejuízo.
            </S.RSDescription>
          </S.RSHeader>
          <S.Table>
            <S.THead>
              <tr>
                {tables.members.columns.map((col, k) => (
                  <S.THCol key={k}>
                    <span>{col.title}</span>
                  </S.THCol>
                ))}
              </tr>
            </S.THead>
            <S.TBody>
              {fMembers.coops.map((m, k) => (
                <S.TRow key={k}>
                  <S.TData>
                    <S.ReporterBox>
                      <S.RPic />
                      <S.RName>{m.name}</S.RName>
                    </S.ReporterBox>
                  </S.TData>
                  <S.TData>
                    <S.DefaultData>{m.level}</S.DefaultData>
                  </S.TData>
                  <S.TData>
                    <S.DefaultData>{m.profile}</S.DefaultData>
                  </S.TData>
                  <S.TData>
                    <S.DefaultData>{m.telephone}</S.DefaultData>
                  </S.TData>
                  <S.TData>
                    <S.DefaultData>
                      {m.modules.map((mod) => mod.title).join(", ")}
                    </S.DefaultData>
                  </S.TData>
                </S.TRow>
              ))}
            </S.TBody>
          </S.Table>

          {fMembers.coops.length > 8 && (
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
        </S.RolesSection>
      </S.RolesSections>
    </S.Content>
  )
}

export default Members

import React, { useState } from "react"
import * as S from "./styles"

import * as Icons from "../../utils/imports/icons"
import CategoryDRE from "../../components/CategoryDRE"
import Input from "../../components/Input"
import Select from "../../components/Select"
import Dropdown from "../../components/Dropdown"

const DRE = () => {
  const [searchFilter, setSearchFilter] = useState("")

  return (
    <S.Content className="bigger">
      <S.HeaderControl>
        <S.HeaderContent>
          <S.HeaderLeft>
            <S.PageTitle>DRE</S.PageTitle>
            <S.MonthsControl>
              <Icons.Arrow width={24} />
              <Icons.Calendar width={24} />
              <Icons.Arrow width={24} />
            </S.MonthsControl>
          </S.HeaderLeft>
          <S.MonthsLabels>
            <S.MonthName>Jul - 23</S.MonthName>
            <S.MonthName>Jul - 23</S.MonthName>
            <S.MonthName>Jul - 23</S.MonthName>
            <S.MonthName>Jul - 23</S.MonthName>
            <S.MonthName>Jul - 23</S.MonthName>
          </S.MonthsLabels>
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

      <CategoryDRE />
      <CategoryDRE />
      <CategoryDRE />

      <S.AllSum>
        <S.ASItem>
          <S.ASItemLeft>
            <Icons.PriceCancel width={24} />
            <S.ASItemName>Custos totais</S.ASItemName>
          </S.ASItemLeft>
          <S.ASItemValues>
            <S.ASItemValue>
              <span className="currency">R$</span>
              <span className="value">266,273.91</span>
              <Icons.Dropdown width={16} />
              <span className="percentage">0.85%</span>
            </S.ASItemValue>
            <S.ASItemValue>
              <span className="currency">R$</span>
              <span className="value">266,273.91</span>
              <Icons.Dropdown width={16} />
              <span className="percentage">0.85%</span>
            </S.ASItemValue>
            <S.ASItemValue>
              <span className="currency">R$</span>
              <span className="value">266,273.91</span>
              <Icons.Dropdown width={16} />
              <span className="percentage">0.85%</span>
            </S.ASItemValue>
            <S.ASItemValue>
              <span className="currency">R$</span>
              <span className="value">266,273.91</span>
              <Icons.Dropdown width={16} />
              <span className="percentage">0.85%</span>
            </S.ASItemValue>
            <S.ASItemValue>
              <span className="currency">R$</span>
              <span className="value">266,273.91</span>
              <Icons.Dropdown width={16} />
              <span className="percentage">0.85%</span>
            </S.ASItemValue>
          </S.ASItemValues>
        </S.ASItem>
        <S.ASItem>
          <S.ASItemLeft>
            <Icons.PriceCheck width={24} />
            <S.ASItemName>Lucros</S.ASItemName>
          </S.ASItemLeft>
          <S.ASItemValues>
            <S.ASItemValue>
              <span className="currency">R$</span>
              <span className="value">266,273.91</span>
              <Icons.Dropdown width={16} />
              <span className="percentage">0.85%</span>
            </S.ASItemValue>
            <S.ASItemValue>
              <span className="currency">R$</span>
              <span className="value">266,273.91</span>
              <Icons.Dropdown width={16} />
              <span className="percentage">0.85%</span>
            </S.ASItemValue>
            <S.ASItemValue>
              <span className="currency">R$</span>
              <span className="value">266,273.91</span>
              <Icons.Dropdown width={16} />
              <span className="percentage">0.85%</span>
            </S.ASItemValue>
            <S.ASItemValue>
              <span className="currency">R$</span>
              <span className="value">266,273.91</span>
              <Icons.Dropdown width={16} />
              <span className="percentage">0.85%</span>
            </S.ASItemValue>
            <S.ASItemValue>
              <span className="currency">R$</span>
              <span className="value">266,273.91</span>
              <Icons.Dropdown width={16} />
              <span className="percentage">0.85%</span>
            </S.ASItemValue>
          </S.ASItemValues>
        </S.ASItem>
        <S.ASItem>
          <S.ASItemLeft>
            <Icons.Balance width={24} />
            <S.ASItemName>Balanço</S.ASItemName>
          </S.ASItemLeft>
          <S.ASItemValues>
            <S.ASItemValue>
              <span className="currency">R$</span>
              <span className="value">266,273.91</span>
              <Icons.Dropdown width={16} />
              <span className="percentage">0.85%</span>
            </S.ASItemValue>
            <S.ASItemValue>
              <span className="currency">R$</span>
              <span className="value">266,273.91</span>
              <Icons.Dropdown width={16} />
              <span className="percentage">0.85%</span>
            </S.ASItemValue>
            <S.ASItemValue>
              <span className="currency">R$</span>
              <span className="value">266,273.91</span>
              <Icons.Dropdown width={16} />
              <span className="percentage">0.85%</span>
            </S.ASItemValue>
            <S.ASItemValue>
              <span className="currency">R$</span>
              <span className="value">266,273.91</span>
              <Icons.Dropdown width={16} />
              <span className="percentage">0.85%</span>
            </S.ASItemValue>
            <S.ASItemValue>
              <span className="currency">R$</span>
              <span className="value">266,273.91</span>
              <Icons.Dropdown width={16} />
              <span className="percentage">0.85%</span>
            </S.ASItemValue>
          </S.ASItemValues>
        </S.ASItem>
      </S.AllSum>
    </S.Content>
  )
}

export default DRE

import React, { useEffect, useState } from "react"
import * as S from "./styles"
import * as Icons from "../../../utils/imports/icons"

type Props = {
  options: any[]
  value: any
  onChange: (v: any) => void
}

const falseOptions = [
  {
    key: 1,
    value: "DRE",
  },
  {
    key: 2,
    value: "Registros tributação",
  },
  {
    key: 3,
    value: "Custos fixos",
  },
  {
    key: 4,
    value: "Equipamentos de informática",
  },
]

const SelectModalBread = ({ options, value, onChange }: Props) => {
  const [showing, setShowing] = useState(false)
  const [selected, setSelected] = useState(falseOptions[0])

  const toggleDropdown = () => {
    setShowing(!showing)
  }

  const handlePick = (picked: any) => {
    setSelected(picked)
    setShowing(false)
  }

  useEffect(() => {
    setSelected(falseOptions[0])
  }, [])

  return (
    <S.SelectArea>
      <S.DataArea onClick={toggleDropdown} turnedIcon={showing}>
        <S.Left>
          <S.SelectedInfo>{selected.value}</S.SelectedInfo>
        </S.Left>
        <Icons.Dropdown width={24} />
      </S.DataArea>
      <S.OptionsArea $visible={showing}>
        {falseOptions.map((o, k) => (
          <S.Option key={k} onClick={() => handlePick(o)}>
            <span>{o.value}</span>
          </S.Option>
        ))}
      </S.OptionsArea>
    </S.SelectArea>
  )
}

export default SelectModalBread

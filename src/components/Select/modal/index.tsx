import React, { useEffect, useState } from "react"
import * as S from "./styles"
import * as Icons from "../../../utils/imports/icons"

type Props = {
  label: string
  value: any
  onChange: (v: any) => void
}

const falseOptions = [
  {
    key: 1,
    value: "12 meses",
  },
  {
    key: 2,
    value: "9 meses",
  },
  {
    key: 3,
    value: "6 meses",
  },
  {
    key: 4,
    value: "3 meses",
  },
  {
    key: 5,
    value: "1 mês",
  },
]

const SelectModal = ({ label, value, onChange }: Props) => {
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
          <S.Label>{label}</S.Label>
          <S.SelectedInfo>{selected.value}</S.SelectedInfo>
        </S.Left>
        <Icons.Dropdown width={24} />
      </S.DataArea>
      <S.OptionsArea visible={showing}>
        {falseOptions.map((o, k) => (
          <S.Option key={k} onClick={() => handlePick(o)}>
            <span>{o.value}</span>
          </S.Option>
        ))}
      </S.OptionsArea>
    </S.SelectArea>
  )
}

export default SelectModal

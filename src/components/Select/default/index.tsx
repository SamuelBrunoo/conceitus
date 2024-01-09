import React, { useEffect, useState } from "react"
import * as S from "./styles"
import * as Icons from "../../../utils/imports/icons"

type Props = {
  label?: string
  value: any
  roOptions: ReadonlyArray<any>
  onChange: (v: any) => void
}

const SelectDefault = ({ label, value, roOptions, onChange }: Props) => {
  const [showing, setShowing] = useState(false)
  const [selected, setSelected] = useState<any>({ value: "" })
  const [options, setOptions] = useState<any[]>([])

  const toggleDropdown = () => {
    setShowing(!showing)
  }

  const handlePick = (picked: any) => {
    setSelected(picked)
    onChange(picked)
    setShowing(false)
  }

  useEffect(() => {
    setOptions([...roOptions])
    if (value && selected.value === "") setSelected(value)
    else setSelected(roOptions[0])
  }, [setOptions, roOptions, value, selected])

  return (
    <S.SelectArea>
      <S.DataArea
        onClick={toggleDropdown}
        className={showing ? "turnedIcon" : ""}
      >
        <S.Left>
          {label && <S.Label>{label}</S.Label>}
          <S.SelectedInfo>{selected?.value}</S.SelectedInfo>
        </S.Left>
        <Icons.Dropdown width={24} />
      </S.DataArea>
      <S.OptionsArea className={showing ? "visible" : ""}>
        {options.map((o, k) => (
          <S.Option key={k} onClick={() => handlePick(o)}>
            <span>{o.value}</span>
          </S.Option>
        ))}
      </S.OptionsArea>
    </S.SelectArea>
  )
}

export default SelectDefault

import React, { useEffect, useState, useRef } from "react"
import * as S from "./styles"
import * as Icons from "../../../utils/imports/icons"

type Props = {
  label: string
  value: any
  roOptions: ReadonlyArray<any>
  onChange: (v: any) => void
}

const SelectMultiple = ({ label, value, roOptions, onChange }: Props) => {
  const dropRef = useRef<null | HTMLDivElement>(null)

  const [showing, setShowing] = useState(false)
  const [selecteds, setSelecteds] = useState<any>([])
  const [options, setOptions] = useState<any[]>([])

  const toggleDropdown = () => {
    setShowing(!showing)
  }

  const handlePick = (picked: any) => {
    setSelecteds(picked)

    if (selecteds.includes(picked)) {
      setSelecteds([...selecteds].filter((s) => s.key !== picked.key))
    } else {
      setSelecteds([...selecteds, picked])
    }
    setShowing(!showing)
  }

  useEffect(() => {
    setOptions([...roOptions])
  }, [setOptions, roOptions])

  return (
    <S.SelectArea>
      <S.DataArea onClick={toggleDropdown} $turnedIcon={showing}>
        <S.Left>
          <S.SelectedInfo>
            {label} ({selecteds.length})
          </S.SelectedInfo>
        </S.Left>
        <Icons.Dropdown width={24} />
      </S.DataArea>
      <S.OptionsArea ref={dropRef} className={`${showing ? "opened" : ""}`}>
        {options.map((o, k) => (
          <S.Option key={k} onClick={() => handlePick(o)}>
            <span>{o.value}</span>
            <S.CheckArea>
              {selecteds.some((s: any) => s.key === o.key) && (
                <Icons.Check width={14} height={14} />
              )}
            </S.CheckArea>
          </S.Option>
        ))}
      </S.OptionsArea>
    </S.SelectArea>
  )
}

export default SelectMultiple

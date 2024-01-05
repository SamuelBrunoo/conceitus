import React, { useEffect, useRef, useState } from "react"
import * as S from "./styles"
import * as Icons from "../../../utils/imports/icons"

type Props = {
  label: string
  options: any[]
  value: any
  onChange: (v: any) => void
  nobg?: boolean
}

const falseOptions = [
  {
    key: 1,
    value: "R$ 1,00 - R$ 500,00",
  },
  {
    key: 2,
    value: "R$ 500,00 - R$ 3000,00",
  },
  {
    key: 3,
    value: "R$ 3000,00 - R$ 10000,00",
  },
  {
    key: 4,
    value: "R$ 10000,00+",
  },
]

const FilterSelect = ({ label, options, value, onChange, nobg }: Props) => {
  const [showing, setShowing] = useState(true)
  const [selected, setSelected] = useState<any>()

  const dropRef = useRef<null | HTMLDivElement>(null)

  const handlePick = (picked: any) => {
    setSelected(picked)
    setShowing(false)
  }

  const toggleDropdown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const anotherOpened = document.querySelectorAll(".filterSelect.visible")

    for (let i = 0; i < anotherOpened.length; i++) {
      const a = anotherOpened[i]
      if (a && dropRef.current && a !== dropRef.current)
        a.classList.remove("visible")
    }

    if (!dropRef.current?.classList.contains("visible")) {
      if (dropRef.current) dropRef.current.classList.add("visible")
      e.currentTarget.classList.add("visible")
    } else {
      if (dropRef.current) dropRef.current.classList.remove("visible")
      e.currentTarget.classList.remove("visible")
    }
  }

  useEffect(() => {
    const isDropped = dropRef.current?.classList.contains("visible")
    setShowing(isDropped ?? false)
  }, [dropRef.current?.classList])

  return (
    <S.SelectArea>
      <S.DataArea
        onClick={toggleDropdown}
        className={`${showing ? "turnedIcon" : ""}${nobg ? "nobg" : ""}`}
      >
        <S.Left className={nobg ? "secondary" : ""}>
          <S.SelectedInfo>{label}</S.SelectedInfo>
          {selected && <S.SelectedInfo>{selected.value ?? ""}</S.SelectedInfo>}
        </S.Left>
        <Icons.Dropdown width={18} />
      </S.DataArea>
      <S.OptionsArea ref={dropRef} className={`filterSelect`}>
        {falseOptions.map((o, k) => (
          <S.Option key={k} onClick={() => handlePick(o)}>
            <span>{o.value}</span>
          </S.Option>
        ))}
      </S.OptionsArea>
    </S.SelectArea>
  )
}

export default FilterSelect

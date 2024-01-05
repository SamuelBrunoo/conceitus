import React, { useEffect, useRef, useState } from "react"
import * as S from "./styles"
import * as Icons from "../../../utils/imports/icons"

type Props = {
  label: string
  value: any
  onChange: (v: any) => void
  nobg?: boolean
}

const DateDropdown = ({ label, value, onChange, nobg }: Props) => {
  const [showing, setShowing] = useState(false)
  const [selected] = useState<any>()

  const dropRef = useRef<null | HTMLDivElement>(null)

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
        nobg={nobg}
        onClick={toggleDropdown}
        className={showing ? "turnedIcon" : ""}
      >
        <S.Left secondaryColor={nobg}>
          {selected && <Icons.CancelCircle width={18} />}
          <S.SelectedInfo>{label}</S.SelectedInfo>
          {selected && <S.SelectedInfo>{selected.value ?? ""}</S.SelectedInfo>}
        </S.Left>
        <Icons.Dropdown width={18} />
      </S.DataArea>
      <S.OptionsArea ref={dropRef} className={`filterSelect`}>
        Calendário
      </S.OptionsArea>
    </S.SelectArea>
  )
}

export default DateDropdown

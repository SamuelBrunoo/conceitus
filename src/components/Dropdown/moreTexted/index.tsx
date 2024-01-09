import React, { useRef } from "react"
import * as S from "./styles"
import * as Icons from "../../../utils/imports/icons"

type Props = {
  label?: string
  options?: TOption[]
}

type TOption = {
  text: string
  fn: (value?: any) => void
}

const MoreTexted = ({ label, options }: Props) => {
  const dropRef = useRef<HTMLDivElement>(null)

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const anotherOpened = document.querySelectorAll(".opened")
    for (let i = 0; i < anotherOpened.length; i++) {
      const a = anotherOpened[i]
      if (a && dropRef.current && a !== dropRef.current)
        a.classList.remove("opened")
    }

    if (!dropRef.current?.classList.contains("opened")) {
      if (dropRef.current) dropRef.current.classList.add("opened")
      e.currentTarget.classList.add("opened")
    } else {
      if (dropRef.current) dropRef.current.classList.remove("opened")
      e.currentTarget.classList.remove("opened")
    }
  }

  const handleDropItem = (to: string) => {
    console.log(to)
    // Link to "to"
  }

  return (
    <S.Wrapper>
      <S.Item>
        <S.VisibleArea onClick={handleClick} className="dropdown-item-area">
          <span>{label ?? ""}</span>
          <Icons.Dropdown width={24} />
        </S.VisibleArea>

        <S.DropdownArea ref={dropRef} className={`dropdown-menu`}>
          <S.DList>
            {options &&
              options.map((o, k) => (
                <S.DListItem key={k} onClick={o.fn}>
                  <S.DItemData>{o.text}</S.DItemData>
                </S.DListItem>
              ))}
          </S.DList>
        </S.DropdownArea>
      </S.Item>
    </S.Wrapper>
  )
}

export default MoreTexted

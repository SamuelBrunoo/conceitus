import React, { useRef } from "react"
import * as S from "./styles"
import { MoreIcon as Icon } from "../../../utils/imports/icons"

type Props = {
  options?: TOption[]
}

type TOption = {
  src?: string
  mainData: string
  secData?: string
  link: string
}

const MoreDropdown = ({ options }: Props) => {
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
          <Icon width={24} />
        </S.VisibleArea>

        <S.DropdownArea ref={dropRef} className={`dropdown-menu`}>
          <S.DList>
            {options &&
              options.map((o, k) => (
                <S.DListItem key={k} onClick={() => handleDropItem(o.link)}>
                  <S.DItemLeft>
                    <S.DItemImage src={o.src ?? ""} />
                    <S.DItemData>{o.mainData}</S.DItemData>
                  </S.DItemLeft>
                  {o.secData && <S.DItemData>{o.secData}</S.DItemData>}
                </S.DListItem>
              ))}
          </S.DList>
        </S.DropdownArea>
      </S.Item>
    </S.Wrapper>
  )
}

export default MoreDropdown

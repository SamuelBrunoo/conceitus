import React from "react"
import * as S from "./styles"
import { Dropdown } from "../../../utils/imports/icons"
import { Link } from "react-router-dom"

type Props = {
  Icon: any
  menuTitle: string
  options?: any[]
  linkAll?: string
}

const MenuDropdown = ({ Icon, menuTitle, options, linkAll }: Props) => {
  const Container =
    linkAll && (!options || options.length === 0) ? Link : S.VisibleArea

  return (
    <S.Item>
      <Container to={linkAll ?? ""}>
        <Icon width={24} />
        <S.MenuTitle>{menuTitle}</S.MenuTitle>
        {options /* && options.length > 0 */ && <Dropdown />}
      </Container>
    </S.Item>
  )
}

export default MenuDropdown

import React, { useEffect, useRef, useState } from "react"
import * as S from "./styles"
import { Dropdown } from "../../../utils/imports/icons"
import { Link, useNavigate } from "react-router-dom"
import * as Icons from "../../../utils/imports/icons"

const MenuDropdown = () => {
  const navigate = useNavigate()

  const dropRef = useRef<HTMLDivElement>(null)
  const [opened, setOpened] = useState(false)
  const [search, setSearch] = useState("")

  const nav = (link: string) => {
    navigate(link)
  }

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

  return (
    <S.Wrapper>
      <S.Item>
        <S.CtxCircle onClick={handleClick}>
          <span>GT</span>
        </S.CtxCircle>

        <S.DropdownArea ref={dropRef} className={`dropdown-menu`}>
          <S.DHeader>
            <S.DHTop>
              <S.CtxCircle>
                <span>GT</span>
              </S.CtxCircle>
              <S.DTitle>Razão social</S.DTitle>
            </S.DHTop>
            <S.DHCtxData>
              <S.CData>
                <S.CDataLabel>CNPJ:</S.CDataLabel>
                <S.CDataValue>dd/mm/aaaa</S.CDataValue>
              </S.CData>
              <S.CData>
                <S.CDataLabel>Insc. Est.:</S.CDataLabel>
                <S.CDataValue>Nome.Sobrenome</S.CDataValue>
              </S.CData>
            </S.DHCtxData>
          </S.DHeader>
          <S.DBody>
            <S.DList>
              <S.DListItem onClick={() => nav("/dashboard")}>
                <S.DItemLeft>
                  <Icons.Settings width={24} />
                  <S.DItemData>Configurações</S.DItemData>
                </S.DItemLeft>
              </S.DListItem>
              <S.DListItem onClick={() => nav("/dashboard")}>
                <S.DItemLeft>
                  <Icons.LogoutIcon width={24} />
                  <S.DItemData>Sair</S.DItemData>
                </S.DItemLeft>
              </S.DListItem>
            </S.DList>
            <hr />
            <S.LastAccessArea>
              <S.LastAccData>Último acesso: dd/mm/aaaa</S.LastAccData>
              <S.LastAccData>Acessado por: Fulano de tal</S.LastAccData>
            </S.LastAccessArea>
          </S.DBody>
        </S.DropdownArea>
      </S.Item>
    </S.Wrapper>
  )
}

export default MenuDropdown

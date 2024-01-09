import React, { useRef } from "react"
import * as S from "./styles"
import { useNavigate } from "react-router-dom"
import * as Icons from "../../../utils/imports/icons"

const MenuDropdown = () => {
  const navigate = useNavigate()

  const dropRef = useRef<HTMLDivElement>(null)

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
              <S.DTitle>Nome Sobrenome</S.DTitle>
            </S.DHTop>
            <S.DHCtxData>
              <S.CData>
                <S.CDataLabel>RG:</S.CDataLabel>
                <S.CDataValue>xx.xxx.xxx-xx</S.CDataValue>
              </S.CData>
            </S.DHCtxData>
          </S.DHeader>
          <S.DBody>
            <S.DList>
              <S.DListItem
                className={"bbLink"}
                onClick={() => nav("/settings/user/data")}
              >
                <S.DItemLeft>
                  <Icons.ManageAccountsIcon width={24} />
                  <S.DItemData>Dados pessoais</S.DItemData>
                </S.DItemLeft>
              </S.DListItem>
              <S.DListItem
                className={"bbLink"}
                onClick={() => nav("/settings/user/config")}
              >
                <S.DItemLeft>
                  <Icons.Settings width={24} />
                  <S.DItemData>Gerenciar minha conta</S.DItemData>
                </S.DItemLeft>
              </S.DListItem>
              <S.DListItem
                className={"bbLink"}
                onClick={() => nav("/dashboard")}
              >
                <S.DItemLeft>
                  <Icons.LogoutIcon width={24} />
                  <S.DItemData>Sair</S.DItemData>
                </S.DItemLeft>
              </S.DListItem>
            </S.DList>
            <hr />
            <S.LastAccessArea>
              <S.LastAccData>Último acesso: dd/mm/aaaa</S.LastAccData>
            </S.LastAccessArea>
          </S.DBody>
        </S.DropdownArea>
      </S.Item>
    </S.Wrapper>
  )
}

export default MenuDropdown

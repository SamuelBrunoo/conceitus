import React, { useEffect, useRef, useState } from "react"
import * as S from "./styles"
import { Dropdown } from "../../../utils/imports/icons"
import { Link, useNavigate } from "react-router-dom"
import * as Icons from "../../../utils/imports/icons"

type Props = {
  dropdownTitle?: string
  Icon: any
  menuTitle: string
  options?: TOption[]
  linkAll?: string
  dropDownLink?: string
}

type TOption = {
  src?: string
  mainData: string
  secData?: string
  link: string
}

const MenuDropdown = ({
  dropdownTitle,
  Icon,
  menuTitle,
  options,
  linkAll,
  dropDownLink,
}: Props) => {
  const navigate = useNavigate()

  const wrapperRef = useRef<null | HTMLDivElement>(null)

  const dropRef = useRef<HTMLDivElement>(null)
  const [search, setSearch] = useState("")
  const [dataList, setDataList] = useState<TOption[]>([])

  const isLink = linkAll && (!options || options.length === 0) && !dropDownLink
  const Container = isLink ? Link : S.VisibleArea

  const handleSearch = (sText: string) => {
    const filteredData = [
      ...(options ?? []).filter((opt) => {
        return opt.mainData.includes(sText) || opt.secData?.includes(sText)
      }),
    ]

    setDataList(filteredData)
    setSearch(sText)
  }

  const handleClick = (
    e?:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!isLink) {
      const anotherOpened = document.querySelectorAll(".opened")
      for (let i = 0; i < anotherOpened.length; i++) {
        const a = anotherOpened[i]
        if (a && dropRef.current && a !== dropRef.current)
          a.classList.remove("opened")
      }

      if (!dropRef.current?.classList.contains("opened")) {
        if (dropRef.current) dropRef.current.classList.add("opened")
        if (e) e.currentTarget.classList.add("opened")
      } else {
        if (dropRef.current) dropRef.current.classList.remove("opened")
        if (e) e.currentTarget.classList.remove("opened")
      }
    } else {
      navigate(linkAll)
    }
  }

  const handleDropItem = (to: string) => {
    console.log(to)
    // Link to "to"
  }

  useEffect(() => {
    const collapseOwnDropdown = () => {
      if (dropRef.current?.classList.contains("opened")) {
        dropRef.current?.classList.remove("opened")
        dropRef.current?.parentElement?.firstElementChild?.classList.remove(
          "opened"
        )
      }
    }

    const handleClickOutside = (
      e: any | React.MouseEvent<HTMLDivElement | HTMLElement, MouseEvent>
    ) => {
      if (
        e.target !== dropRef.current &&
        e.target !== dropRef.current?.parentElement &&
        e.srcElement.offsetParent !== dropRef.current &&
        e.srcElement.offsetParent !== dropRef.current?.parentElement &&
        !e.target.classList.contains("dropdown-item-area") &&
        !e.target.parentElement.classList.contains("dropdown-item-area")
      )
        collapseOwnDropdown()
    }

    if (!isLink) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    } else return
  }, [dropRef, isLink])

  useEffect(() => {
    if (options) setDataList(options ?? [])
  }, [options])

  return (
    <S.Wrapper ref={wrapperRef}>
      <S.Item>
        <Container
          to={linkAll ?? ""}
          onClick={handleClick}
          className="dropdown-item-area turnedIcon"
        >
          <Icon width={24} />
          <S.MenuTitle>{menuTitle}</S.MenuTitle>
          {options && !isLink && <Dropdown />}
        </Container>

        {!isLink && (
          <S.DropdownArea ref={dropRef} className={`dropdown-menu`}>
            <S.DHeader>
              {dropdownTitle && (
                <S.DTitle>{dropdownTitle ?? menuTitle}</S.DTitle>
              )}
              <S.SeachArea>
                <Icons.Search width={24} />
                <S.SearchInput
                  placeholder="Pesquisar"
                  value={search}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </S.SeachArea>
            </S.DHeader>
            <S.DBody>
              <S.DListTitle>Recentes</S.DListTitle>
              <S.DList>
                {dataList &&
                  dataList.map((o, k) => (
                    <S.DListItem key={k} onClick={() => handleDropItem(o.link)}>
                      <S.DItemLeft>
                        <S.DItemImage src={o.src ?? ""} />
                        <S.DItemData>{o.mainData}</S.DItemData>
                      </S.DItemLeft>
                      {o.secData && <S.DItemData>{o.secData}</S.DItemData>}
                    </S.DListItem>
                  ))}
              </S.DList>
              <hr />
              <Link to={(dropDownLink as string) ?? ""}>
                <Icons.MoreListIcon width={24} />
                <span>Ver lista completa</span>
              </Link>
            </S.DBody>
          </S.DropdownArea>
        )}
      </S.Item>
    </S.Wrapper>
  )
}

export default MenuDropdown

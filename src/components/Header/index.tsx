import { Link, useLocation, useParams } from "react-router-dom"
import * as S from "./styles"
import Dropdown from "../Dropdown"
import * as icons from "../../utils/imports/icons"
import Button from "../Button"
import Modal from "../Modal"
import { useState } from "react"
import { menus } from "../../utils/_sys"

type Props = {
  userLevel: number | string
}

const Header = ({ userLevel }: Props) => {
  const [showingModal, setShowingModal] = useState(false)

  const { pathname } = useLocation()

  const getMatchIcon = (
    unique: string,
    icons: {
      IsOn: any
      IsNot: any
    }
  ) => {
    const page = pathname.split("/")[pathname.split("/").length - 1]

    return page === unique ? icons.IsOn : icons.IsNot
  }

  const renderMainItems = () => {
    return menus.menuData.map((item, k) => {
      return (userLevel as number) >= item.level ? (
        <Dropdown.Menu
          key={k}
          Icon={item.icon}
          dropdownTitle={item.dropdownTitle}
          menuTitle={item.title}
          options={item.options}
          linkAll={item.linkAll}
        />
      ) : null
    })
  }

  const renderSubItems = () => {
    return menus.submenuData.map((item, k) => {
      return (
        <Dropdown.Menu
          key={k}
          dropdownTitle={"Título"}
          Icon={getMatchIcon(item.unique, item.icons)}
          menuTitle={item.title}
          options={item.options}
          linkAll={item.linkAll}
        />
      )
    })
  }

  return (
    <>
      {showingModal && (
        <Modal.NewEntry closeFn={() => setShowingModal(false)} />
      )}
      <S.Bg>
        <S.Container>
          <S.NavigationArea>
            <S.HomeItem>
              <Link to={"/dashboard"}>
                <icons.HomeFilled width={24} fill={"#FFF"} />
              </Link>
            </S.HomeItem>

            <S.ItemsArea>{renderMainItems()}</S.ItemsArea>
          </S.NavigationArea>
          <S.UserArea>
            <Button
              type={"primary"}
              title="Nova entrada"
              action={() => setShowingModal(true)}
            />
            <Dropdown.MenuCompany />
            <Dropdown.MenuUser />
          </S.UserArea>
        </S.Container>
        {(userLevel as number) > 1 && (
          <S.Container submenu={true}>
            <S.NavigationArea>
              <S.ItemsArea>{renderSubItems()}</S.ItemsArea>
            </S.NavigationArea>
          </S.Container>
        )}
      </S.Bg>
    </>
  )
}

export default Header

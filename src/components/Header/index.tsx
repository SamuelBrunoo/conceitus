import { Link } from "react-router-dom"
import * as S from "./styles"
import Dropdown from "../Dropdown"
import * as icons from "../../utils/imports/icons"
import Button from "../Button"

type Props = {
  userLevel: number | string
}

const menuData = [
  {
    level: 3,
    icon: icons.Apartment,
    title: "Organizações",
    options: [],
  },
  {
    level: 3,
    icon: icons.Users,
    title: "Usuários",
    options: [],
  },
  {
    level: 1,
    icon: icons.GridView,
    title: "Módulos",
    options: [],
  },
  {
    level: 1,
    icon: icons.FlagImportant,
    title: "Entradas",
    options: [],
  },
  {
    level: 3,
    icon: icons.Book,
    title: "Histórico de atividades",
    options: [],
  },
  {
    level: 1,
    icon: icons.Analytics,
    title: "Dashboards",
    options: [],
  },
  {
    level: 2,
    icon: icons.SettingsFilled,
    title: "Administração",
    linkAll: "/dashboard",
  },
]

const Header = ({ userLevel }: Props) => {
  const renderMainItems = () => {
    return menuData.map((item, k) => {
      return (userLevel as number) >= item.level ? (
        <Dropdown.Menu
          key={k}
          Icon={item.icon}
          menuTitle={item.title}
          options={item.options}
          linkAll={item.linkAll}
        />
      ) : null
    })
  }

  return (
    <S.Bg>
      <S.Container>
        <S.NavigationArea>
          <S.HomeItem>
            <Link to={"/dashboard"}>
              <icons.HomeFilled width={24} fill={"#FFF"} />
            </Link>
          </S.HomeItem>

          <S.ItemsArea>
            {renderMainItems()}
          </S.ItemsArea>


          {/* User */}
        </S.NavigationArea>
        <S.UserArea>
          <Button
            type={'primary'}
            title="Nova entrada"
            action={() => null}
          />
          <div></div>
          <div></div>
        </S.UserArea>
      </S.Container>
    </S.Bg>
  )
}

export default Header

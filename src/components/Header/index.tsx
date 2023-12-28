import { Link } from "react-router-dom"
import * as S from "./styles"
import Dropdown from "../Dropdown"
import * as icons from "../../utils/imports/icons"
import Button from "../Button"
import Modal from "../Modal"

type Props = {
  userLevel: number | string
}

const menuData = [
  {
    level: 3,
    icon: icons.Apartment,
    title: "Organizações",
    dropdownTitle: "Organizações",
    dropDownLink: "/dashboard",
    options: [
      {
        src: undefined,
        mainData: "Turma da tia Juju",
        secData: "xx.xxx.xxx/0001-xx",
        link: "/dashboard",
      },
      {
        src: undefined,
        mainData: "Turma da tia Maria",
        secData: "xx.xxx.xxx/0001-xx",
        link: "/dashboard",
      },
      {
        src: undefined,
        mainData: "Turma da tia Joana",
        secData: "xx.xxx.xxx/0001-xx",
        link: "/dashboard",
      },
      {
        src: undefined,
        mainData: "Turma da tia Ana",
        secData: "xx.xxx.xxx/0001-xx",
        link: "/dashboard",
      },
    ],
  },
  {
    level: 3,
    icon: icons.Users,
    title: "Usuários",
    dropdownTitle: "Usuários",
    dropDownLink: "/dashboard",
    options: [
      {
        src: undefined,
        mainData: "Nome Sobrenome",
        link: "/dashboard",
      },
      {
        src: undefined,
        mainData: "Nome Sobrenome 2",
        link: "/dashboard",
      },
      {
        src: undefined,
        mainData: "Nome Sobrenome 3",
        link: "/dashboard",
      },
      {
        src: undefined,
        mainData: "Nome Sobrenome 4",
        link: "/dashboard",
      },
    ],
  },
  {
    level: 1,
    icon: icons.GridView,
    title: "Módulos",
    dropdownTitle: "Módulos",
    dropDownLink: "/dashboard",
    options: [
      {
        src: undefined,
        mainData: "Nome Sobrenome",
        link: "/dashboard",
      },
      {
        src: undefined,
        mainData: "Nome Sobrenome",
        link: "/dashboard",
      },
      {
        src: undefined,
        mainData: "Nome Sobrenome",
        link: "/dashboard",
      },
      {
        src: undefined,
        mainData: "Nome Sobrenome",
        link: "/dashboard",
      },
    ],
  },
  {
    level: 1,
    icon: icons.FlagImportant,
    title: "Entradas",
    dropdownTitle: "Entradas",
    dropDownLink: "/dashboard",
    options: [],
  },
  {
    level: 3,
    icon: icons.Book,
    title: "Histórico de atividades",
    dropdownTitle: "Histórico de atividades",
    dropDownLink: "/dashboard",
    options: [],
  },
  {
    level: 1,
    icon: icons.Analytics,
    title: "Dashboards",
    dropdownTitle: "Dashboards",
    dropDownLink: "/dashboard",
    options: [
      {
        src: undefined,
        mainData: "Nome Sobrenome",
        link: "/dashboard",
      },
      {
        src: undefined,
        mainData: "Nome Sobrenome",
        link: "/dashboard",
      },
      {
        src: undefined,
        mainData: "Nome Sobrenome",
        link: "/dashboard",
      },
      {
        src: undefined,
        mainData: "Nome Sobrenome",
        link: "/dashboard",
      },
    ],
  },
  {
    level: 2,
    icon: icons.SettingsFilled,
    title: "Administração",
    linkAll: "/dashboard",
  },
]

const submenuData = [
  {
    icon: icons.Apartment,
    title: "Minha organização",
    linkAll: "/dashboard",
  },
  {
    icon: icons.UsersFilled,
    title: "Membros",
    linkAll: "/dashboard",
  },
  {
    icon: icons.GridView,
    title: "Módulos",
    dropdownTitle: "Entradas",
    dropDownLink: "/dashboard",
    options: [],
  },
  {
    icon: icons.FlagImportant,
    title: "Entradas",
    linkAll: "/dashboard",
  },
  {
    icon: icons.Book,
    title: "Histórico de atividades",
    dropdownTitle: "Entradas",
    dropDownLink: "/dashboard",
    options: [],
  },
  {
    icon: icons.KeyIcon,
    title: "Perfil de acesso",
    linkAll: "/dashboard",
  },
]

const Header = ({ userLevel }: Props) => {
  const renderSubItems = () => {
    return submenuData.map((item, k) => {
      return (
        <Dropdown.Menu
          key={k}
          dropdownTitle={"Título"}
          Icon={item.icon}
          menuTitle={item.title}
          options={item.options}
          linkAll={item.linkAll}
        />
      )
    })
  }

  const renderMainItems = () => {
    return menuData.map((item, k) => {
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

  return (
    <>
      <Modal.NewEntry />
      <S.Bg>
        <S.Container>
          <S.NavigationArea>
            <S.HomeItem>
              <Link to={"/dashboard"}>
                <icons.HomeFilled width={24} fill={"#FFF"} />
              </Link>
            </S.HomeItem>

            <S.ItemsArea>{renderMainItems()}</S.ItemsArea>

            {/* User */}
          </S.NavigationArea>
          <S.UserArea>
            <Button type={"primary"} title="Nova entrada" action={() => null} />
            <div></div>
            <div></div>
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

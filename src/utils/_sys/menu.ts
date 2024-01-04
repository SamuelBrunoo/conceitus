import * as icons from "../imports/icons"

export const menuData = [
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

export const submenuData = [
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
    linkAll: "/dashboard/entries",
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

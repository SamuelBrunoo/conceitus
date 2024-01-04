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
    icons: {
      IsOn: icons.Apartment,
      IsNot: icons.Apartment,
    },
    title: "Minha organização",
    linkAll: "/dashboard",
    unique: "myorg",
  },
  {
    icons: {
      IsOn: icons.UsersFilled,
      IsNot: icons.Users,
    },
    title: "Membros",
    linkAll: "/dashboard",
    unique: "members",
  },
  {
    icons: {
      IsOn: icons.GridView,
      IsNot: icons.GridView,
    },
    title: "Módulos",
    dropdownTitle: "Entradas",
    dropDownLink: "/dashboard",
    options: [],
    unique: "modules",
  },
  {
    icons: {
      IsOn: icons.FlagImportantFilled,
      IsNot: icons.FlagImportant,
    },
    title: "Entradas",
    linkAll: "/dashboard/entries",
    unique: "entries",
  },
  {
    icons: {
      IsOn: icons.BookFilled,
      IsNot: icons.Book,
    },
    title: "Histórico de atividades",
    dropdownTitle: "Entradas",
    dropDownLink: "/dashboard",
    options: [],
    unique: "history",
  },
  {
    icons: {
      IsOn: icons.KeyIcon,
      IsNot: icons.KeyIcon,
    },
    title: "Perfil de acesso",
    linkAll: "/dashboard",
    unique: "profile",
  },
]

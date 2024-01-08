export const Profiles = {
  users: [
    { key: "ad", value: "Administrador" },
    { key: "ma", value: "Gestor" },
    { key: "us", value: "Usuário" },
  ],
} as const

export const ProfilesRO = { ...Profiles }

export const Charges = {
  users: [
    { key: "ow", value: "Dono" },
    { key: "em", value: "Funcionário" },
  ],
} as const

export const ChargesRO = { ...Charges }

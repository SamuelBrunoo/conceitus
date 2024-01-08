import { SettRegOptions as opts } from "../../../_sys/forms/settings/regData"

const options = { ...opts } as const

export type TSettRegData = {
  sex: TSexOptions
  civState: TCivStateOptions
  nationality: string
  date: any
  cpf: string
  rg: string
  cep: string
  street: string
  number: string
  complement: string
  district: string
  city: string
  state: TStatesOptions
  country: TCountriesOptions
  email: string
  phone: string
}

// type extraction

type TSexOptions = (typeof options.sex)[number]
type TCivStateOptions = (typeof options.civState)[number]
type TStatesOptions = (typeof options.state)[number]
type TCountriesOptions = (typeof options.country)[number]

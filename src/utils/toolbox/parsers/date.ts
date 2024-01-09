import { months } from "../../_sys/consts/dates"
import { pad } from "../text/pad"

type TFormats = "br" | "usa" | "ddm"

export const parseDate = (date: Date | number | string, format?: TFormats) => {
  const d = new Date(date)

  switch (format) {
    case "ddm":
      return formatDateDDM(d)
    default:
      return ""
  }
}

const formatDateDDM = (date: Date) => {
  const [day, month] = [
    date.getDate(),
    date.getMonth()
  ]

  return `${pad(day)} de ${months[month].name.toLowerCase()}`
}

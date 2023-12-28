import React from "react"
import * as S from "./styles"
import * as Icons from "../../../utils/imports/icons"

type Props = {
  placeholder?: string
  label: string
  value: any
  onChange: (v: any) => void
  isMonetary?: boolean
  isDate?: boolean
}

const InputModal = ({
  placeholder,
  label,
  value,
  onChange,
  isMonetary,
  isDate,
}: Props) => {

  const padValue = (v: number) => String(v).padStart(2, '0')
  
  const parseDate = (v: any) => {
    const d = new Date(v)

    const day = padValue(d.getDate())
    const month = padValue(d.getMonth())
    const year = d.getFullYear()
    
    return `${day}/${month}/${year}`
  }
  
  return (
    <S.InputArea>
      <S.Left>
        <S.Label>{label}</S.Label>
        <S.InpLine>
          {isMonetary && <span>R$</span>}
          {isDate ? (
            <span>{parseDate(value)}</span>
          ) : (
            <S.Input
              placeholder={placeholder}
              value={value}
              onChange={(e) => onChange(e.target.value)}
            />
          )}
        </S.InpLine>
      </S.Left>
      {isDate && <Icons.Calendar width={18} />}
    </S.InputArea>
  )
}

export default InputModal

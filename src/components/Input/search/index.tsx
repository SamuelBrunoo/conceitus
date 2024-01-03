import React from "react"
import * as S from "./styles"
import * as Icons from "../../../utils/imports/icons"

type Props = {
  placeholder?: string
  value: any
  onChange: (v: any) => void
}

const SearchInput = ({ placeholder, value, onChange }: Props) => {
  return (
    <S.InputArea>
      <S.Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <Icons.Search width={18} />
    </S.InputArea>
  )
}

export default SearchInput

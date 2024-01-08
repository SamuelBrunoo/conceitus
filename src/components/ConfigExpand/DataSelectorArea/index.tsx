import React, { useEffect, useState } from "react"
import * as S from "./styles"

type Props = {
  dataTypes: TDataType[]
}

type TDataType = {
  id: string | number
  name: string | number
}

const DataSelectorArea = ({ dataTypes }: Props) => {
  const [selected, setSelected] = useState<undefined | TDataType>()

  const onSelect = (dt: TDataType) => {
    setSelected(dt)
  }

  useEffect(() => {
    if (dataTypes.length > 0) setSelected(dataTypes[0])
  }, [dataTypes, setSelected])

  return (
    <S.DataSelectArea>
      {dataTypes.map((d, k) => (
        <S.DataType
          key={k}
          active={selected?.id === d.id}
          onClick={() => onSelect(d)}
        >
          <span>{d.name}</span>
        </S.DataType>
      ))}
    </S.DataSelectArea>
  )
}

export default DataSelectorArea

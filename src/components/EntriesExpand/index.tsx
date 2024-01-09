import React, { useState } from "react"
import * as S from "./styles"

import * as Icons from "../../utils/imports/icons"

const ConfigExpand = () => {
  const [showCatDetails, setShowCatDetails] = useState(false)
  const [subListVisible, setSubListVisible] = useState(false)

  return (
    <S.Wrapper>
      <S.ResumeRow onClick={() => setShowCatDetails(!showCatDetails)}>
        <Icons.Dropdown
          width={24}
          className={showCatDetails ? "rotated" : ""}
        />
        <S.BoxName>
          <span>Janeiro</span>
        </S.BoxName>
      </S.ResumeRow>
      <S.Box $visible={showCatDetails}>
        <S.BoxWrapper>
          <S.BoxContent>
            <S.DataList>
              {/* Item */}
              <S.DataItem>
                <S.DIResume onClick={() => setSubListVisible(!subListVisible)}>
                  <S.DIRData>15, Ter - 15:00</S.DIRData>
                  <S.DIRData>Status da ação</S.DIRData>
                  <S.DIRData>Valor</S.DIRData>
                  <S.DIRData className="bold">Atribuição</S.DIRData>
                  <S.DIRData className="bold">Família</S.DIRData>
                  <S.DIRData className="bold">Tipo</S.DIRData>
                </S.DIResume>
                <S.Explanation>
                  <span>Motivos: </span>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni, iure laboriosam officia ipsam aperiam assumenda
                    eligendi laborum eaque blanditiis quia. Reiciendis suscipit
                    voluptatibus quas repudiandae voluptates a hic at incidunt!
                  </span>
                </S.Explanation>
              </S.DataItem>
              {/* Item */}
              <S.DataItem>
                <S.DIResume onClick={() => setSubListVisible(!subListVisible)}>
                  <S.DIRData>15, Ter - 15:00</S.DIRData>
                  <S.DIRData>Status da ação</S.DIRData>
                  <S.DIRData>Valor</S.DIRData>
                  <S.DIRData className="bold">Atribuição</S.DIRData>
                  <S.DIRData className="bold">Família</S.DIRData>
                  <S.DIRData className="bold">Tipo</S.DIRData>
                </S.DIResume>
                <S.Explanation>
                  <span>Motivos: </span>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni, iure laboriosam officia ipsam aperiam assumenda
                    eligendi laborum eaque blanditiis quia. Reiciendis suscipit
                    voluptatibus quas repudiandae voluptates a hic at incidunt!
                  </span>
                </S.Explanation>
              </S.DataItem>
              {/* Item */}
              <S.DataItem>
                <S.DIResume onClick={() => setSubListVisible(!subListVisible)}>
                  <S.DIRData>15, Ter - 15:00</S.DIRData>
                  <S.DIRData>Status da ação</S.DIRData>
                  <S.DIRData>Valor</S.DIRData>
                  <S.DIRData className="bold">Atribuição</S.DIRData>
                  <S.DIRData className="bold">Família</S.DIRData>
                  <S.DIRData className="bold">Tipo</S.DIRData>
                </S.DIResume>
                <S.Explanation>
                  <span>Motivos: </span>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni, iure laboriosam officia ipsam aperiam assumenda
                    eligendi laborum eaque blanditiis quia. Reiciendis suscipit
                    voluptatibus quas repudiandae voluptates a hic at incidunt!
                  </span>
                </S.Explanation>
              </S.DataItem>
            </S.DataList>
          </S.BoxContent>
        </S.BoxWrapper>
      </S.Box>
    </S.Wrapper>
  )
}

export default ConfigExpand

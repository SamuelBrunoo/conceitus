import React, { useState } from "react"
import * as S from "./styles"

import * as Icons from "../../utils/imports/icons"

import Select from "../Select"

const ShowOptsRO = [
  { key: "on", value: "Visualizar" },
  { key: "off", value: "Esconder" },
]

const ConfigExpand = () => {
  const [showCatDetails, setShowCatDetails] = useState(false)
  const [subListVisible, setSubListVisible] = useState(false)

  return (
    <S.Wrapper>
      <S.ResumeRow onClick={() => setShowCatDetails(!showCatDetails)}>
        <S.BoxName>
          <span>DRE</span>
        </S.BoxName>
        <Icons.Dropdown
          width={24}
          className={showCatDetails ? "rotated" : ""}
        />
      </S.ResumeRow>
      <S.Box $visible={showCatDetails}>
        <S.BoxWrapper>
          <S.BoxContent>
            <S.DataList>
              {/* Item */}
              <S.DataItem>
                <S.DIResume onClick={() => setSubListVisible(!subListVisible)}>
                  <S.DIRName>
                    <Icons.Dropdown
                      width={24}
                      className={subListVisible ? "rotated" : ""}
                    />
                    <span>Faturamento</span>
                  </S.DIRName>
                </S.DIResume>
                <S.SubListArea $visible={subListVisible}>
                  <S.SubListWrapper>
                    <S.SubListContent>
                      <S.SLItem>
                        <S.SLIName>
                          <span>Transportes</span>
                        </S.SLIName>
                        <Select.Default
                          roOptions={ShowOptsRO}
                          value={null}
                          onChange={() => {}}
                        />
                      </S.SLItem>
                      <S.SLItem>
                        <S.SLIName>
                          <span>Embalagem</span>
                        </S.SLIName>
                        <Select.Default
                          roOptions={ShowOptsRO}
                          value={null}
                          onChange={() => {}}
                        />
                      </S.SLItem>
                      <S.SLItem>
                        <S.SLIName>
                          <span>Impostos</span>
                        </S.SLIName>
                        <Select.Default
                          roOptions={ShowOptsRO}
                          value={null}
                          onChange={() => {}}
                        />
                      </S.SLItem>
                      <S.SLItem>
                        <S.SLIName>
                          <span>Fornecedores</span>
                        </S.SLIName>
                        <Select.Default
                          roOptions={ShowOptsRO}
                          value={null}
                          onChange={() => {}}
                        />
                      </S.SLItem>
                    </S.SubListContent>
                  </S.SubListWrapper>
                </S.SubListArea>
              </S.DataItem>

              {/* Item */}
              <S.DataItem>
                <S.DIResume onClick={() => setSubListVisible(!subListVisible)}>
                  <S.DIRName>
                    <Icons.Dropdown
                      width={24}
                      className={subListVisible ? "rotated" : ""}
                    />
                    <span>Custos variáveis</span>
                  </S.DIRName>
                </S.DIResume>
                <S.SubListArea $visible={subListVisible}>
                  <S.SubListWrapper>
                    <S.SubListContent>
                      <S.SLItem>
                        <S.SLIName>
                          <span>Transportes</span>
                        </S.SLIName>
                        <Select.Default
                          roOptions={ShowOptsRO}
                          value={null}
                          onChange={() => {}}
                        />
                      </S.SLItem>
                      <S.SLItem>
                        <S.SLIName>
                          <span>Embalagem</span>
                        </S.SLIName>
                        <Select.Default
                          roOptions={ShowOptsRO}
                          value={null}
                          onChange={() => {}}
                        />
                      </S.SLItem>
                      <S.SLItem>
                        <S.SLIName>
                          <span>Impostos</span>
                        </S.SLIName>
                        <Select.Default
                          roOptions={ShowOptsRO}
                          value={null}
                          onChange={() => {}}
                        />
                      </S.SLItem>
                      <S.SLItem>
                        <S.SLIName>
                          <span>Fornecedores</span>
                        </S.SLIName>
                        <Select.Default
                          roOptions={ShowOptsRO}
                          value={null}
                          onChange={() => {}}
                        />
                      </S.SLItem>
                    </S.SubListContent>
                  </S.SubListWrapper>
                </S.SubListArea>
              </S.DataItem>

              {/* Item */}
              <S.DataItem>
                <S.DIResume onClick={() => setSubListVisible(!subListVisible)}>
                  <S.DIRName>
                    <Icons.Dropdown
                      width={24}
                      className={subListVisible ? "rotated" : ""}
                    />
                    <span>Custos fixos</span>
                  </S.DIRName>
                </S.DIResume>
                <S.SubListArea $visible={subListVisible}>
                  <S.SubListWrapper>
                    <S.SubListContent>
                      <S.SLItem>
                        <S.SLIName>
                          <span>Transportes</span>
                        </S.SLIName>
                        <Select.Default
                          roOptions={ShowOptsRO}
                          value={null}
                          onChange={() => {}}
                        />
                      </S.SLItem>
                      <S.SLItem>
                        <S.SLIName>
                          <span>Embalagem</span>
                        </S.SLIName>
                        <Select.Default
                          roOptions={ShowOptsRO}
                          value={null}
                          onChange={() => {}}
                        />
                      </S.SLItem>
                      <S.SLItem>
                        <S.SLIName>
                          <span>Impostos</span>
                        </S.SLIName>
                        <Select.Default
                          roOptions={ShowOptsRO}
                          value={null}
                          onChange={() => {}}
                        />
                      </S.SLItem>
                      <S.SLItem>
                        <S.SLIName>
                          <span>Fornecedores</span>
                        </S.SLIName>
                        <Select.Default
                          roOptions={ShowOptsRO}
                          value={null}
                          onChange={() => {}}
                        />
                      </S.SLItem>
                    </S.SubListContent>
                  </S.SubListWrapper>
                </S.SubListArea>
              </S.DataItem>
            </S.DataList>
          </S.BoxContent>
        </S.BoxWrapper>
      </S.Box>
    </S.Wrapper>
  )
}

export default ConfigExpand

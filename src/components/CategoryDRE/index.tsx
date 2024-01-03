import React, { useState } from "react"
import * as S from "./styles"

import * as Icons from "../../utils/imports/icons"
import DataSelectorArea from "./DataSelectorArea"
import { fDataTypes } from "../../utils/_falseData/dataTypes"

const CategoryDRE = () => {
  const [showCatDetails, setShowCatDetails] = useState(false)
  const [subListVisible, setSubListVisible] = useState(false)

  return (
    <S.Wrapper>
      <S.ResumeRow onClick={() => setShowCatDetails(!showCatDetails)}>
        <S.RRName>
          <Icons.Dropdown
            width={24}
            className={showCatDetails ? "rotated" : ""}
          />
          <span>Custos Fixos</span>
        </S.RRName>
        <S.RRValues>
          <S.RRValue className="mainResume">
            <span className="currency">R$</span>
            <span className="value">266,273.91</span>
            <Icons.Dropdown width={16} />
            <span className="percentage">0.85%</span>
          </S.RRValue>
          <S.RRValue className="mainResume">
            <span className="currency">R$</span>
            <span className="value">266,273.91</span>
            <Icons.Dropdown width={16} />
            <span className="percentage">0.85%</span>
          </S.RRValue>
          <S.RRValue className="mainResume">
            <span className="currency">R$</span>
            <span className="value">266,273.91</span>
            <Icons.Dropdown width={16} />
            <span className="percentage">0.85%</span>
          </S.RRValue>
          <S.RRValue className="mainResume">
            <span className="currency">R$</span>
            <span className="value">266,273.91</span>
            <Icons.Dropdown width={16} />
            <span className="percentage">0.85%</span>
          </S.RRValue>
          <S.RRValue className="mainResume">
            <span className="currency">R$</span>
            <span className="value">266,273.91</span>
            <Icons.Dropdown width={16} />
            <span className="percentage">0.85%</span>
          </S.RRValue>
        </S.RRValues>
      </S.ResumeRow>
      <S.Box visible={showCatDetails}>
        <S.BoxWrapper>
          <S.BoxContent>
            <DataSelectorArea dataTypes={fDataTypes} />
            <S.DataList>
              <S.DataItem>
                <S.DIResume onClick={() => setSubListVisible(!subListVisible)}>
                  <S.DIRName>
                    <Icons.Dropdown
                      width={24}
                      className={subListVisible ? "rotated" : ""}
                    />
                    <span>Custos Fixos</span>
                  </S.DIRName>
                  <S.DIRValues>
                    <S.RRValue>
                      <span className="currency">R$</span>
                      <span className="value">266,273.91</span>
                      <Icons.Dropdown width={16} />
                      <span className="percentage">0.85%</span>
                    </S.RRValue>
                    <S.RRValue>
                      <span className="currency">R$</span>
                      <span className="value">266,273.91</span>
                      <Icons.Dropdown width={16} />
                      <span className="percentage">0.85%</span>
                    </S.RRValue>
                    <S.RRValue>
                      <span className="currency">R$</span>
                      <span className="value">266,273.91</span>
                      <Icons.Dropdown width={16} />
                      <span className="percentage">0.85%</span>
                    </S.RRValue>
                    <S.RRValue>
                      <span className="currency">R$</span>
                      <span className="value">266,273.91</span>
                      <Icons.Dropdown width={16} />
                      <span className="percentage">0.85%</span>
                    </S.RRValue>
                    <S.RRValue>
                      <span className="currency">R$</span>
                      <span className="value">266,273.91</span>
                      <Icons.Dropdown width={16} />
                      <span className="percentage">0.85%</span>
                    </S.RRValue>
                  </S.DIRValues>
                </S.DIResume>
                <S.SubListArea visible={subListVisible}>
                  <S.SubListWrapper>
                    <S.SubListContent>
                      <S.SLItem>
                        <S.SLIName>
                          <span>Equipamentos de informática</span>
                        </S.SLIName>
                        <S.SLIValues>
                          <S.RRValue>
                            <span className="currency">R$</span>
                            <span className="value">266,273.91</span>
                            <Icons.Dropdown width={16} />
                            <span className="percentage">0.85%</span>
                          </S.RRValue>
                          <S.RRValue>
                            <span className="currency">R$</span>
                            <span className="value">266,273.91</span>
                            <Icons.Dropdown width={16} />
                            <span className="percentage">0.85%</span>
                          </S.RRValue>
                          <S.RRValue>
                            <span className="currency">R$</span>
                            <span className="value">266,273.91</span>
                            <Icons.Dropdown width={16} />
                            <span className="percentage">0.85%</span>
                          </S.RRValue>
                          <S.RRValue>
                            <span className="currency">R$</span>
                            <span className="value">266,273.91</span>
                            <Icons.Dropdown width={16} />
                            <span className="percentage">0.85%</span>
                          </S.RRValue>
                          <S.RRValue>
                            <span className="currency">R$</span>
                            <span className="value">266,273.91</span>
                            <Icons.Dropdown width={16} />
                            <span className="percentage">0.85%</span>
                          </S.RRValue>
                        </S.SLIValues>
                      </S.SLItem>
                      <S.SLItem>
                        <S.SLIName>
                          <span>Equipamentos de informática</span>
                        </S.SLIName>
                        <S.SLIValues>
                          <S.RRValue>
                            <span className="currency">R$</span>
                            <span className="value">266,273.91</span>
                            <Icons.Dropdown width={16} />
                            <span className="percentage">0.85%</span>
                          </S.RRValue>
                          <S.RRValue>
                            <span className="currency">R$</span>
                            <span className="value">266,273.91</span>
                            <Icons.Dropdown width={16} />
                            <span className="percentage">0.85%</span>
                          </S.RRValue>
                          <S.RRValue>
                            <span className="currency">R$</span>
                            <span className="value">266,273.91</span>
                            <Icons.Dropdown width={16} />
                            <span className="percentage">0.85%</span>
                          </S.RRValue>
                          <S.RRValue>
                            <span className="currency">R$</span>
                            <span className="value">266,273.91</span>
                            <Icons.Dropdown width={16} />
                            <span className="percentage">0.85%</span>
                          </S.RRValue>
                          <S.RRValue>
                            <span className="currency">R$</span>
                            <span className="value">266,273.91</span>
                            <Icons.Dropdown width={16} />
                            <span className="percentage">0.85%</span>
                          </S.RRValue>
                        </S.SLIValues>
                      </S.SLItem>
                      <S.SLItem>
                        <S.SLIName>
                          <span>Equipamentos de informática</span>
                        </S.SLIName>
                        <S.SLIValues>
                          <S.RRValue>
                            <span className="currency">R$</span>
                            <span className="value">266,273.91</span>
                            <Icons.Dropdown width={16} />
                            <span className="percentage">0.85%</span>
                          </S.RRValue>
                          <S.RRValue>
                            <span className="currency">R$</span>
                            <span className="value">266,273.91</span>
                            <Icons.Dropdown width={16} />
                            <span className="percentage">0.85%</span>
                          </S.RRValue>
                          <S.RRValue>
                            <span className="currency">R$</span>
                            <span className="value">266,273.91</span>
                            <Icons.Dropdown width={16} />
                            <span className="percentage">0.85%</span>
                          </S.RRValue>
                          <S.RRValue>
                            <span className="currency">R$</span>
                            <span className="value">266,273.91</span>
                            <Icons.Dropdown width={16} />
                            <span className="percentage">0.85%</span>
                          </S.RRValue>
                          <S.RRValue>
                            <span className="currency">R$</span>
                            <span className="value">266,273.91</span>
                            <Icons.Dropdown width={16} />
                            <span className="percentage">0.85%</span>
                          </S.RRValue>
                        </S.SLIValues>
                      </S.SLItem>
                      <S.SLItem>
                        <S.SLIName>
                          <span>Equipamentos de informática</span>
                        </S.SLIName>
                        <S.SLIValues>
                          <S.RRValue>
                            <span className="currency">R$</span>
                            <span className="value">266,273.91</span>
                            <Icons.Dropdown width={16} />
                            <span className="percentage">0.85%</span>
                          </S.RRValue>
                          <S.RRValue>
                            <span className="currency">R$</span>
                            <span className="value">266,273.91</span>
                            <Icons.Dropdown width={16} />
                            <span className="percentage">0.85%</span>
                          </S.RRValue>
                          <S.RRValue>
                            <span className="currency">R$</span>
                            <span className="value">266,273.91</span>
                            <Icons.Dropdown width={16} />
                            <span className="percentage">0.85%</span>
                          </S.RRValue>
                          <S.RRValue>
                            <span className="currency">R$</span>
                            <span className="value">266,273.91</span>
                            <Icons.Dropdown width={16} />
                            <span className="percentage">0.85%</span>
                          </S.RRValue>
                          <S.RRValue>
                            <span className="currency">R$</span>
                            <span className="value">266,273.91</span>
                            <Icons.Dropdown width={16} />
                            <span className="percentage">0.85%</span>
                          </S.RRValue>
                        </S.SLIValues>
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

export default CategoryDRE

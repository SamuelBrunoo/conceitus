import styled from "styled-components"

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.blue.primaryLight};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  flex: 1;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    cursor: pointer;
  }
`

export const HeaderTexts = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 8px;
`

export const CardTitle = styled.span`
  font-weight: 500;
`

export const CardDescription = styled.span`
  font-size: 0.875em;
`

export const DataArea = styled.div`
  background-color: ${({ theme }) => theme.colors.white.primary};
  border-radius: 20px;
  height: 148px;
`

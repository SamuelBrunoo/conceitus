import styled from "styled-components"

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  padding: 32px 0;
  margin-top: calc(170px);
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const FBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  width: 80%;
`

export const BlockTitle = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black.primary};
`

export const BlockRow = styled.div`
  display: flex;
  gap: 8px;
`

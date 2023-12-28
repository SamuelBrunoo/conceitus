import styled from "styled-components"

export const InputArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 8px;
  background-color: ${({ theme }) => theme.colors.blue.primaryLight};
  border-radius: 8px;
  flex: 1;
  cursor: pointer;
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`

export const Label = styled.span`
  font-size: 0.75em;
  color: ${({ theme }) => theme.colors.blue.tertiary};
`

export const InpLine = styled.div`
  display: flex;

  span {
    font-size: 0.875em;
  }
`

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.black.primary};
  font-size: 0.875em;
  font-weight: 500;
  white-space: nowrap;
  background: none;
  outline: none;
  border: none;
  padding: 0 0 4px 4px;
  flex: 1;
`

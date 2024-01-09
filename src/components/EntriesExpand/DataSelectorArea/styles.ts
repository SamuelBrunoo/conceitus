import styled from "styled-components"

export const DataSelectArea = styled.div`
  display: flex;
  gap: 16px;
  padding: 4px;
  margin-left: 32px;
`

export const DataType = styled.div<{ active: boolean }>`
  padding: 12px 8px;
  border-radius: 8px;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.blue.primaryDark : theme.colors.white.primary};
  cursor: pointer;
  transition: background-color 0.3s;

  span {
    font-size: 0.875rem;
    font-weight: 500;
    color: ${({ active, theme }) =>
      active ? theme.colors.white.primary : theme.colors.blue.primaryDark};
    transition: color 0.3s;
  }
`

import styled from "styled-components"


export const Item = styled.div`
  cursor: pointer;
  padding: 8px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white.primary};
    display: flex;
    align-items: center;
    gap: 10px;
  }
`

export const VisibleArea = styled.div<{to: string}>`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const MenuTitle = styled.span`
  color: ${({ theme }) => theme.colors.white.primary};
  font-size: 16px;
  white-space: nowrap;
`
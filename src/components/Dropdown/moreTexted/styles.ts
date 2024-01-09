import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
`

export const Item = styled.div`
  color: ${({ theme }) => theme.colors.white.primary};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white.primary};
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px;
    cursor: pointer;
  }
`

export const VisibleArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black.primary};

  span {
    color: ${({ theme }) => theme.colors.blue.secondaryDark};
    font-size: 1rem;
  }
`

export const MenuTitle = styled.span`
  color: ${({ theme }) => theme.colors.white.primary};
  font-size: 16px;
  white-space: nowrap;
`

export const DropdownArea = styled.div`
  display: none;
  position: absolute;
  flex-direction: column;
  top: calc(100% + 12px);
  min-width: 180px;
  margin-left: -8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white.primary};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  cursor: normal;

  &.opened {
    display: flex;
  }
`

export const DHeader = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.blue.secondaryDark};
  padding: 16px 8px 8px;
  gap: 8px;
`

export const DTitle = styled.span`
  color: ${({ theme }) => theme.colors.white.primary};
  font-size: 16px;
  font-weight: 600;
  text-indent: 10px;
`

export const DBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px;

  hr {
    border: 2px solid ${({ theme }) => theme.colors.black.primary};
    width: 90%;
    background: none;
    margin: auto;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black.primary};
    cursor: pointer;
  }
`

export const DList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const DListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
  padding: 8px 12px;
  gap: 16px;
  cursor: pointer;
`

export const DItemData = styled.span`
  color: ${({ theme }) => theme.colors.black.primary};
  font-size: 0.875em;
  font-weight: 500;
  white-space: nowrap;
`

import styled from "styled-components"

export const Wrapper = styled.div`
  position: static;
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

export const CtxCircle = styled.div`
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.white.primary};
  cursor: pointer;

  span {
    color: ${({theme}) => theme.colors.blue.secondaryDark};
    font-size: 0.75em;
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
  top: calc(100% + 2px);
  min-width: 300px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.white.primary};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  cursor: normal;
  right: 24px;
  
  &.opened {
    display: flex;
  }
`

export const DHeader = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.blue.secondaryDark};
  padding: 16px 8px 8px;
  gap: 4px;
`

export const DHTop = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 8px;
`

export const DTitle = styled.span`
  color: ${({ theme }) => theme.colors.white.primary};
  font-size: 16px;
  font-weight: 600;
  text-indent: 10px;
`

export const DHCtxData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-left: 0 8px 8px 8px;
  padding-left: 60px;
`

export const CData = styled.div`
  display: flex;
  gap: 4px;
`

export const CDataLabel = styled.div``

export const CDataValue = styled.div``

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

export const DListTitle = styled.span`
  display: block;
  padding: 8px;
  color: ${({ theme }) => theme.colors.black.primary};
  font-size: 0.75em;
  font-weight: 400;
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
  padding: 4px;
  gap: 16px;
  cursor: pointer;
`

export const DItemLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${({ theme }) => theme.colors.black.primary};
`

export const DItemData = styled.span`
  color: ${({ theme }) => theme.colors.black.primary};
  font-size: 0.75em;
  font-weight: 500;
  white-space: nowrap;
`

export const LastAccessArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 8px;
`

export const LastAccData = styled.span`
  font-size: 0.75em;
  color: ${({ theme }) => theme.colors.black.primary};
`

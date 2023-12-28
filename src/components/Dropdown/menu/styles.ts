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

export const VisibleArea = styled.div<{ to: string; turnedIcon: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  cursor: pointer;

  svg:nth-last-child(1) {
    transition: transform 0.3s;
    transform: rotate(0deg);
  }

  &.opened svg:nth-last-child(1) {
    transform: rotate(180deg);
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
  margin-left: -8px;
  border-radius: 24px;
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

export const SeachArea = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  color: ${({ theme }) => theme.colors.white.primary};
`

export const SearchInput = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 4px 0;
  flex: 1;
  color: ${({ theme }) => theme.colors.white.primary};
  font-size: 0.875em;

  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.white.primary};
  }
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
`

export const DItemImage = styled.div<{ src: string }>`
  width: 24px;
  height: 24px;
  border-radius: 24px;
  background-color: #51a7b4;
  background-image: url(${({ src }) => src});
`

export const DItemData = styled.span`
  color: ${({ theme }) => theme.colors.black.primary};
  font-size: 0.75em;
  font-weight: 500;
  white-space: nowrap;
`

import styled from "styled-components"

export const SelectArea = styled.div`
  position: relative;
`

export const DataArea = styled.div<{ nobg?: boolean; turnedIcon: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  background-color: ${({ nobg, theme }) =>
    nobg ? "transparent" : theme.colors.blue.primaryLight};
  padding: 4px 12px;
  border-radius: 48px;
  color: ${({ theme }) => theme.colors.black.primary};
  cursor: pointer;

  svg {
    transition: transform 0.3s;
    fill: ${({ theme }) => theme.colors.black.primary};
    transform: rotate(${({ turnedIcon }) => (turnedIcon ? 180 : 0)}deg);
  }
`

export const Left = styled.div<{ secondaryColor?: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  overflow: hidden;
  white-space: nowrap;
  color: ${({ secondaryColor, theme }) =>
    secondaryColor
      ? theme.colors.blue.secondaryDark
      : theme.colors.black.primary};

  span {
    font-weight: ${({ secondaryColor }) => (secondaryColor ? 400 : 600)};
  }
`

export const SelectedInfo = styled.span`
  font-size: 1em;
`

export const OptionsArea = styled.div`
  display: none;
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  background-color: ${({ theme }) => theme.colors.white.primary};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  max-height: 180px;
  overflow-y: auto;
  z-index: 2;

  &.visible {
    display: block;
  }
`

export const Option = styled.div`
  background-color: transparent;
  transition: background-color 0.3s;
  padding: 8px;
  white-space: nowrap;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue.primaryLight};
  }
`

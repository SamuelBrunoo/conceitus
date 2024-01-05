import styled from "styled-components"

export const SelectArea = styled.div`
  position: relative;
`

export const DataArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  background-color: ${({ theme }) => theme.colors.blue.primaryLight};
  padding: 4px 12px;
  border-radius: 48px;
  color: ${({ theme }) => theme.colors.black.primary};
  cursor: pointer;

  svg {
    transition: transform 0.3s;
    fill: ${({ theme }) => theme.colors.black.primary};
    transform: rotate(0deg);
  }

  &.turnedIcon {
    svg {
      transform: rotate(180deg);
    }
  }

  &.nobg {
    background-color: transparent;
  }
`

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  overflow: hidden;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.black.primary};

  span {
    font-weight: 600;
  }

  &.secondary {
    color: ${({ theme }) => theme.colors.blue.secondaryDark};

    span {
      font-weight: 400;
    }
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

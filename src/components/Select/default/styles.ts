import styled from "styled-components"

export const SelectArea = styled.div`
  position: relative;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.blue.primaryLight};
  padding: 4px 8px;
  border-radius: 8px;
`

export const DataArea = styled.div<{ turnedIcon: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => theme.colors.black.primary};
  cursor: pointer;

  svg {
    transition: transform 0.3s;
    fill: ${({ theme }) => theme.colors.black.primary};
    transform: rotate(${({ turnedIcon }) => (turnedIcon ? 180 : 0)}deg);
  }
`

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const Label = styled.span`
  font-size: 0.75em;
  color: ${({ theme }) => theme.colors.blue.tertiary};
`

export const SelectedInfo = styled.span`
  font-size: 0.875em;
  font-weight: 500;
`

export const OptionsArea = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? "block" : "none")};
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.white.primary};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  max-height: 180px;
  overflow-y: auto;
  z-index: 5;
`

export const Option = styled.div`
  background-color: transparent;
  transition: background-color 0.3s;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue.primaryLight};
  }
`

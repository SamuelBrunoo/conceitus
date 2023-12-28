import styled from "styled-components"

export const SelectArea = styled.div`
  position: relative;
`

export const DataArea = styled.div<{ turnedIcon: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  background-color: ${({ theme }) => theme.colors.white.secondary};
  padding: 4px 12px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white.primary};
  cursor: pointer;

  svg {
    transition: transform 0.3s;
    fill: ${({ theme }) => theme.colors.black.primary};
    transform: rotate(${({ turnedIcon }) => (turnedIcon ? 180 : 0)}deg);
  }
`

export const Left = styled.div`
  overflow: hidden;
  white-space: nowrap;
`

export const SelectedInfo = styled.span`
  font-size: 1em;
  font-weight: 600;
`

export const OptionsArea = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? "block" : "none")};
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  background-color: ${({ theme }) => theme.colors.white.primary};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  max-height: 180px;
  overflow-y: auto;
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

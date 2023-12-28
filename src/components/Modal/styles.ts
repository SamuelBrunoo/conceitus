import styled from "styled-components"

export const Bg = styled.div`
  display: grid;
  position: absolute;
  place-items: center;
  overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 200;
  background-color: ${({ theme }) => theme.colors.black.secondary};
`

 export const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.white.primary};
  border-radius: 24px;
  overflow: hidden;
  width: 100%;
  max-width: 870px;
  margin: auto 48px;
`

export const Container = styled.div<{submenu?: boolean}>`
  display: flex;
  justify-content: ${({ submenu }) => submenu ? 'flex-start' : 'space-between'};
  align-items: center;
  gap: ${({ submenu }) => submenu ? 10 : 48}px;
  flex: 1;
  max-width: 100%;
  padding: 16px 24px;
  background-color: ${({ submenu, theme }) => submenu ? theme.colors.blue.primaryDark : theme.colors.blue.secondaryDark};
  color: ${({ theme }) => theme.colors.white.primary};
`

export const ModalTitle = styled.span`
  font-size: 1.25em;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white.primary};
`

export const ButtonsArea = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.white.primary};
`

export const FormArea = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const FormRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const NowBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  span {
    font-size: 0.875em;
    color: ${({ theme }) => theme.colors.blue.tertiary};
  }
`
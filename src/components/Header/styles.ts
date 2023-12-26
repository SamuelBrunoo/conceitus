import styled from "styled-components"

export const Bg = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.blue.secondaryDark};
  z-index: 1000;
  padding: 4px 16px;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 48px;
  max-width: 100%;
`

export const NavigationArea = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  overflow-x: hidden;
  flex: 1;
`

export const ItemsArea = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
  overflow-x: auto;
`

export const HomeItem = styled.div`
  width: 48px;
  height: 48px;

  a {
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
  }
`

export const UserArea = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 30px;

  span {
    padding: 0 .3em;
  }

  div {
    width: 24px;
    height: 24px;
    border-radius: 24px;
    background-color: ${({theme}) => theme.colors.white.primary};
  }
`

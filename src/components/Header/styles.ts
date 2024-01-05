import styled from "styled-components"

export const Bg = styled.header`
  display: flex;
  position: sticky;
  flex-direction: column;
  overflow: visible;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 48px;
  flex: 1;
  max-width: 100%;
  padding: 4px 16px 4px 16px;
  background-color: ${({ theme }) => theme.colors.blue.secondaryDark};

  &.submenu {
    padding-left: 80px;
    background-color: ${({ theme }) => theme.colors.blue.primaryDark};
  }
`

export const NavigationArea = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  overflow-x: hidden;
  overflow-y: visible;
  flex: 1;
`

export const ItemsArea = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
  overflow-x: auto;
  overflow: visible;
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
  justify-content: space-between;
  gap: 30px;

  span {
    padding: 0 0.3em;
  }
`

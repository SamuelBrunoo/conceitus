import styled from "styled-components"

export const HeaderControl = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.blue.primaryDark};
  position: fixed;
  left: 0;
  top: 100px;
  width: 100%;
  padding: 24px 0;
  z-index: 10;
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex: 1;
  max-width: 1200px;
  margin: 0 20px;

  &.bigger {
    max-width: 1500px;
  }
`

export const HeaderLeft = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
`


export const PageTitle = styled.h1`
  font-size: 1.75em;
  line-height: 1em;
  font-weight: 600;
  flex: 1;
  color: ${({ theme }) => theme.colors.white.primary};
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`
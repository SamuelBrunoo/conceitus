import styled from "styled-components"

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const Wrapper = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 104px;
  flex: 1;
`

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 24px;
  flex: 1;
  padding-bottom: 120px;

  &:has(.bigger) {
    max-width: 1480px;
  }
`

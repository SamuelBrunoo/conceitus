import styled from "styled-components"

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100vh;
  overflow-x: hidden;
`

export const Container = styled.main<{
  isAuthing: boolean
  showing: boolean
}>`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: ${({ isAuthing }) => (isAuthing ? "186px" : "140px")} 48px;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.1);
  opacity: ${({ showing }) => (showing ? 1 : 0)};
  transition: opacity .4s;

  @media (max-width: 1400px) {
    & {
      padding: 10vh 48px;
    }
  }
`

export const Content = styled.div<{ isAuthing: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
  ${({ isAuthing }) => (isAuthing ? "max-width: 320px;" : "")}

  @media (max-width: 380px) {
    & {
      max-width: calc(100% - 24px - 24px);
      min-width: 230px;
    }
  }
`

export const DiscretLink = styled.a`
  width: fit-content;
  text-decoration: none;
  font-size: 14px;
  color: #7a8ba5;
  cursor: pointer;
  margin: 0 auto;

  &:hover {
    text-decoration: underline;
  }
`

export const CompanyLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media (max-width: 380px) {
    & {
      justify-content: space-between;
      gap: 16px;
    }
  }

  @media (max-width: 290px) {
    & {
      flex-direction: column;
      gap: 8px;
    }
  }
`

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

export const Container = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 186px 48px;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.1);

  @media (max-width: 1400px) {
    & {
      padding: 20vh 48px;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
  max-width: 320px;

  @media (max-width: 380px) {
    & {
      max-width: calc(100% - 24px - 24px);
      min-width: 230px;
    }
  }
`

export const FormArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`

export const InputBox = styled.div`
  display: flex;
  gap: 12px;
  padding: 4px 12px;
  background-color: rgba(77, 94, 144, 0.05);
  border-radius: 4px;
  overflow: hidden;
`

export const LoginInput = styled.input`
  flex: 1;
  background: none;
  outline: none;
  border: none;
  font-size: 14px;
  font-weight: 500;
`

export const SubmitButton = styled.button<{
  disabled: boolean
  errorState: boolean
}>`
  width: 100%;
  padding: 8px 12px;
  background: ${({ errorState }) =>
    errorState ? "#D66E6E" : "rgb(69, 127, 212)"};
  opacity: ${({ disabled }) => (disabled ? 0.2 : 1)};
  transition: opacity 0.3s, background-color 0.5s;
  outline: none;
  border: none;
  border-radius: 40px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
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

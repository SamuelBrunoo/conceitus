import styled from "styled-components"

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

  svg {
    cursor: pointer;
  }
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

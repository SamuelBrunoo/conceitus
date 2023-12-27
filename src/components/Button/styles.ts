import styled from "styled-components"

export const Btn = styled.button<{ type: "primary" | "secondary" | "tertiary" }>`
  padding: 0.625em 1em;
  width: fit-content;
  border: none;
  outline: none;
  background: none;
  border-radius: 48px;
  cursor: pointer;
  
  background-color: ${({ type, theme }) => {
    return type === "primary"
      ? theme.colors.white.primary
      : type === "secondary"
      ? theme.colors.blue.primaryDark
      : "transparent"
  }};
`

export const BtnText = styled.span`
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.blue.secondaryDark};
  font-size: 16px;
  font-weight: 600;
`

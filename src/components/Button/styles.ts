import styled from "styled-components"
import { TButtons } from "./"

export const Btn = styled.button<{ type: TButtons }>`
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
      : type === "delete"
      ? theme.colors.red.primaryLight
      : type === "update"
      ? theme.colors.blue.primaryLight
      : "transparent"
  }};
`

export const BtnText = styled.span<{ type: TButtons }>`
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.blue.secondaryDark};

  color: ${({ type, theme }) => {
    return type === "primary"
      ? theme.colors.blue.secondaryDark
      : type === "secondary"
      ? theme.colors.white.primary
      : type === "delete"
      ? theme.colors.red.primary
      : type === "update"
      ? theme.colors.blue.primaryDark
      : theme.colors.black.primary
  }};
  font-size: 16px;
  font-weight: 600;
`

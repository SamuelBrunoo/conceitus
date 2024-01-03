import styled from "styled-components"

export const InputArea = styled.div`
  flex: 1;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 4px 8px;
  background-color: ${({ theme }) => theme.colors.blue.primaryLight};
  border-radius: 48px;
  cursor: pointer;

  svg {
    min-width: 18px;
  }
`

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.black.primary};
  font-size: 0.875em;
  font-weight: 400;
  white-space: nowrap;
  background: none;
  outline: none;
  border: none;
  padding: 0 0 4px 4px;
  width: calc(100% - 18px - 8px); // container - svg - gap
`

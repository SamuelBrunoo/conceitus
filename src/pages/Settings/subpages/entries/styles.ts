import styled from "styled-components"

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

// Filter section

export const FilterArea = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 0;
`

export const FASearch = styled.div`
  max-width: 110px;
`

export const FACompanies = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`

export const FACompany = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 28px;
  border: 2px solid ${({ theme }) => theme.colors.white.primary};
  background-color: #51a7b4;
  top: 0;
  margin-left: -10px;

  &:nth-child(1) {
    z-index: 6;
    margin-left: 0;
  }

  &:nth-child(2) {
    z-index: 5;
  }

  &:nth-child(3) {
    z-index: 4;
  }

  &:nth-child(4) {
    z-index: 3;
  }

  &:nth-child(5) {
    z-index: 2;
  }

  &:has(span) {
    display: grid;
    place-items: center;
    border-color: ${({ theme }) => theme.colors.blue.primaryDark};
    background-color: transparent;
    margin-left: -5px;

    span {
      font-size: 0.875em;
      line-height: 1em;
      color: ${({ theme }) => theme.colors.black.primary};
    }
  }
`

export const SelectContainer = styled.div`
  width: fit-content;
`

export const FilterBtn = styled.button`
  cursor: pointer;
  outline: none;
  background: none;
  border: none;
  padding: 8px;

  span {
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.blue.secondaryDark};
  }
`

export const List = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;

  button {
    margin-left: 16px;
  }
`

// Pagination

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;

  color: #457fd4;

  svg {
    cursor: pointer;
  }

  & svg:nth-child(1) {
    transform: rotate(-180deg);
  }
`

export const PaginationItem = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 8px;
  padding: 4px 12px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #000;

  &:hover {
    color: #457fd4;
  }

  &.active {
    background-color: rgba(27, 74, 144, 0.05);
    color: #457fd4;
  }
`

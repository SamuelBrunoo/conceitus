import styled from "styled-components"

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  padding: unset 32px 32px;
  margin-top: calc(72px + 24px);
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

// Sections

export const RolesSections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const RolesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px 8px;
`

export const RSHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const RSTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
`

export const RSDescription = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
`

// Table
export const Table = styled.table`
  width: 100%;
  border-spacing: 12px;
`

export const THead = styled.thead``

export const THCol = styled.th`
  text-align: left;
  padding: 8px 0;

  span {
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.black};
  }
`

export const TBody = styled.tbody``

export const TRow = styled.tr``

export const TData = styled.td`
  padding: 6px 0;
`

export const ModuleBox = styled.div`
  width: 100%;
  background-color: beige;
  display: grid;
  place-items: center;
  padding: 6px 12px;
  border-radius: 8px;
  width: fit-content;

  span {
    font-size: 0.875rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.black.primary};
  }
`

export const IdTxt = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue.primaryDark};
`

export const DefaultData = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black.primary};
  min-width: 100%;
  text-align: left;
  display: block;
`

export const ReporterBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 4px;
`

export const RPic = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.blue.secondaryDark};
`

export const RName = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue.primaryDark};
`

// Pagination

export const Pagination = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;

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
    color: ${({ theme }) => theme.colors.blue.quaternary};
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.blue.quaternaryLight};
    color: ${({ theme }) => theme.colors.blue.quaternary};
  }
`

export const OutButton = styled.button`
  width: fit-content;
  padding: 8px 12px;
  background: rgb(69, 127, 212);
  outline: none;
  border: none;
  border-radius: 40px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
`

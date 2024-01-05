import styled from "styled-components"

export const FormArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`

export const TableArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Table = styled.table`
  border-collapse: collapse;

  &:empty {
    border: none;
    height: 8px;
    background-color: red;
  }
`

export const THead = styled.thead``

export const Th = styled.th`
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  padding: 8px 12px;

  &:nth-last-child(1) {
    padding: 8px 0 8px 12px;
  }
`

export const SearchBox = styled.div`
  padding: 8px 4px 8px 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: rgba(27, 74, 144, 0.05);
  border-radius: 8px;
  max-width: 120px;
`

export const SearchActionBtn = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
`

export const SearchInput = styled.input`
  border: none;
  outline: none;
  background: none;
  width: unset;
  min-width: unset;
  flex: 1;
  max-width: calc(120px - 4px - 24px - 16px);
`

export const TBody = styled.tbody``

export const Row = styled.tr`
  background-color: rgba(27, 74, 144, 0.05);

  td:nth-child(1) {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  td:nth-last-child(1) {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`

export const Td = styled.td`
  padding: 8px 12px;
`

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const EnterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 2px 24px;
  background: none;
  outline: none;
  border: none;
  font-size: 14px;
  font-weight: 600;
  color: #457fd4;
  cursor: pointer;
`

// Pagination

export const Pagination = styled.div`
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

export const PaginationItem = styled.button<{ active: boolean }>`
  border: none;
  outline: none;
  background-color: ${({ active }) =>
    active ? "rgba(27, 74, 144, 0.05)" : "transparent"};
  transition: background-color 0.3s, color 0.3s;
  border-radius: 8px;
  padding: 4px 12px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: ${({ active }) => (active ? "#457fd4" : "#000")};

  &:hover {
    color: #457fd4;
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

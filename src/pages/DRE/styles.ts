import styled from "styled-components"

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  padding: unset 32px 32px;
  padding-top: calc(72px + 24px);
`

// Month control header

export const HeaderControl = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.blue.primaryDark};
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  padding: 24px 0;
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex: 1;
  max-width: 1500px;
  padding: 0 24px;
  margin: 0 20px;
`

export const HeaderLeft = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const PageTitle = styled.h1`
  font-size: 1.375em;
  line-height: 1em;
  font-weight: 600;
  flex: 1;
  color: ${({ theme }) => theme.colors.white.primary};
`

export const MonthsControl = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 32px;
  color: ${({ theme }) => theme.colors.white.primary};

  svg {
    cursor: pointer;
  }

  svg:nth-child(1) {
    transform: rotate(180deg);
  }
`

export const MonthsLabels = styled.div`
  flex: 7;
  display: flex;
  align-items: center;
  gap: 32px;
`

export const MonthName = styled.span`
  flex: 1;
  text-align: center;
  font-size: 1.125em;
  color: ${({ theme }) => theme.colors.white.primary};
  font-weight: 700;
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

// All sum section

export const AllSum = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 12px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.blue.secondaryLight};
`

export const ASItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 8px 0;
`

export const ASItemLeft = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 4px;
`

export const ASItemName = styled.span`
  font-size: 1.215em;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black.primary};
`

export const ASItemValues = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex: 7;
`

export const ASItemValue = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  gap: 2px;

  svg {
    transform: rotate(-90deg);
    height: 1em;
  }

  span {
    white-space: nowrap;
    font-size: 1em;
    font-weight: 500;
    line-height: 16px;

    &.currency {
      font-size: 0.75em;
    }

    &.value,
    &.percentage {
      color: ${({ theme }) => theme.colors.blue.secondaryDark};
    }

    line-height: 16px;
  }

  &:not(.mainResume) span {
    color: ${({ theme }) => theme.colors.blue.secondaryDark};
  }
`

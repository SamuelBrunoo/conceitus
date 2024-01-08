import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.blue.primaryLight};
  border-radius: 20px;
  padding: 16px;
  flex: 1;
`

export const ResumeRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  cursor: pointer;
  padding: 8px 12px;

  svg {
    transition: transform 0.3s;
    transform: rotate(-90deg);

    &.rotated {
      transform: rotate(0deg);
    }
  }
`

export const BoxName = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  span {
    font-size: 1.215em;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.black.primary};
  }
`

export const RRValues = styled.div`
  display: flex;
  gap: 32px;
  flex: 7;
`

export const RRValue = styled.div`
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

export const Box = styled.div<{ visible: boolean }>`
  display: grid;
  grid-template-rows: ${({ visible }) => (visible ? 1 : 0)}fr;
  overflow: hidden;
  transition: grid-template-rows 0.3s;
`

export const BoxWrapper = styled.div`
  min-height: 0;
`

export const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px 8px 32px 16px;
`

export const DataList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const DataItem = styled.div`
  padding: 0 8px;
`

export const DIResume = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 8px 0;
  cursor: pointer;
`

export const DIRName = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 4px;

  svg {
    transition: transform 0.3s;
    transform: rotate(-90deg);

    &.rotated {
      transform: rotate(0deg);
    }
  }

  span {
    font-size: 1.215em;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.black.primary};
  }
`

export const DIRValues = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex: 7;
`

export const SubListArea = styled.div<{ visible: boolean }>`
  display: grid;
  grid-template-rows: ${({ visible }) => (visible ? 1 : 0)}fr;
  overflow: hidden;
  transition: grid-template-rows 0.3s;
`

export const SubListWrapper = styled.div`
  min-height: 0;
`

export const SubListContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const SLItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
`

export const SLIName = styled.div`
  flex: 7;
  display: flex;
  align-items: center;
  gap: 12px;

  span {
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.black.primary};
    margin-left: 60px;
    white-space: nowrap;
  }
`

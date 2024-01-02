import styled from "styled-components"

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 32px 0;
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 18px;
`

export const SHDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 8px;
`

export const STitle = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black.primary};
`

export const SDescription = styled.span`
  font-size: 0.875em;
  color: ${({ theme }) => theme.colors.black.primary};
`

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const SRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`

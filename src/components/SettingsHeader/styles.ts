import styled from "styled-components"

export const HeaderControl = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.blue.settingsHeader};
  position: fixed;
  left: 0;
  top: 100px;
  width: 100%;
  padding: 24px 0;
  z-index: 10;
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  flex: 1;
  max-width: 1200px;
  margin: 0 20px;

  &.bigger {
    max-width: 1500px;
  }
`

export const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`

export const BackBtn = styled.button`
  display: grid;
  place-items: center;
  background: none;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.white.secondary};
  width: 36px;
  height: 36px;
  border-radius: 36px;
  cursor: pointer;
`

export const ProfileBox = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 54px;
  background-color: ${({ theme }) => theme.colors.white.primary};
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white.primary};
`

export const ProfileName = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
`

export const ProfileDesc = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
`

export const PageTitle = styled.h1`
  font-size: 1.75em;
  line-height: 1em;
  font-weight: 600;
  flex: 1;
  color: ${({ theme }) => theme.colors.white.primary};
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`

export const TabsArea = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const ScreenTab = styled.div<{ active: boolean }>`
  display: grid;
  place-items: center;
  padding: 8px 12px;
  color: ${({ theme }) => theme.colors.white.primary};
  cursor: pointer;

  span {
    font-size: 1rem;
    font-weight: 600;

    text-decoration: ${({ active }) => (active ? "underline" : "")};
  }
`

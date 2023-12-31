import { DefaultTheme } from "styled-components"

const light: DefaultTheme = {
  colors: {
    black: {
      primary: "rgba(63, 67, 76, 1)",
      secondary: "rgba(0, 0, 0, 0.35)",
      tertiary: "rgba(0, 0, 0, 0.25)",
    },
    blue: {
      primaryDark: "rgba(27, 74, 174, 1)",
      primaryLight: "rgba(27, 74, 174, 0.05)",
      secondaryDark: "rgba(67, 127, 212, 1)",
      secondaryLight: "rgba(67, 127, 212, 0.05)",
      tertiary: "rgba(122, 139, 165, 1)",
      quaternary: "#457fd4",
      quaternaryLight: "rgba(27, 74, 144, 0.05)",
      settingsHeader: "rgba(52, 95, 159, 1)"
    },
    grey: {
      primary: "rgba(217, 217, 217, 1)"
    },
    pink: {
      primary: "rgba(116, 16, 171, 1)"
    },
    red: {
      primary: "rgba(184, 74, 74, 1)",
      primaryLight: "rgba(184, 74, 74, 0.1)",
    },
    white: {
      primary: "rgba(255, 255, 255, 1)",
      secondary: "rgba(255, 255, 255, 0.2)"
    },
  }
}

export default light
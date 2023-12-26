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
      secondaryLight: "rgba(67, 127, 212, 0.05)"
    },
    grey: {
      primary: "rgba(217, 217, 217, 1)"
    },
    pink: {
      primary: "rgba(116, 16, 171, 1)"
    },
    white: {
      primary: "rgba(255, 255, 255, 1)",
      secondary: "rgba(255, 255, 255, 0.2)"
    },
  }
}

export default light
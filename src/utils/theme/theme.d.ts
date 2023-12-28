import "styled-components"



declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: {
        primary: string,
        secondary: string,
        tertiary: string,
      },
      blue: {
        primaryDark: string
        primaryLight: string
        secondaryDark: string
        secondaryLight: string
        tertiary: string
      },
      grey: {
        primary: string
      },
      pink: {
        primary: string,
      },
      white: {
        primary: string,
        secondary: string,
      },
    }
  }
}
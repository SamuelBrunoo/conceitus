import Routes from "./routes"
import { ThemeProvider } from "styled-components"

import theme from "./utils/theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}

export default App

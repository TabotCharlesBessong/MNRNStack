
import {ThemeProvider} from "@mui/material"
import { theme } from "./shared/utils/theme"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"

const App = () => {
  return (
    <ThemeProvider theme={theme} >
      <Router>
        <Routes>
          <Route path="/" element={'Homepage'} />
          <Route path="/register" element={'Registerpage'} />
          <Route path="/Signin" element={'Signinpage'} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
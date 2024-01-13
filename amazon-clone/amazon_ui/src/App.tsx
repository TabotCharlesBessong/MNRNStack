
import {ThemeProvider} from "@mui/material"
import { theme } from "./shared/utils/theme"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import { RegistrationForm } from "./features/auth/components"

const App = () => {
  return (
    <ThemeProvider theme={theme} >
      <Router>
        <Routes>
          <Route path="/" element={<RegistrationForm/>} />
          <Route path="/register" element={'Registerpage'} />
          <Route path="/Signin" element={'Signinpage'} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
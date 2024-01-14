import { ThemeProvider } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HomePage, Register, SigninPage } from "./pages";
import { theme } from "./shared/utils/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Signin" element={<SigninPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

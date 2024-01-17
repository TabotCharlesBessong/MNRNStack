import { ThemeProvider } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HomePage, Register, SigninPage } from "./pages";
import { theme } from "./shared/utils/theme";
import { store } from "./store";

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

type CypressWindow = Window & typeof globalThis & { Cypress: any; store: any };

const thisWindow = window as CypressWindow;

if (thisWindow.Cypress) {
  console.log("CYPRESS WINDOW");

  thisWindow.store = store;
}

export default App;

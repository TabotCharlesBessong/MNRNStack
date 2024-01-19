import { ThemeProvider } from "@mui/material";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { CartPage, HomePage, Register, SigninPage } from "./pages";
import { theme } from "./shared/utils/theme";
import { store } from "./store";
import { PrivateRoute,Header } from "./features/auth/components";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<PrivateRoute page={<HomePage />} />} />
          <Route path="/cart" element={<PrivateRoute page={<CartPage />} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Signin" element={<SigninPage />} />
          <Route path="*" element={<Navigate to="/" />} />
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

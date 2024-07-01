import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/header/Navbar";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CssBaseline />
      <LandingPage />
      {/* <SignupPage /> */}
      {/* <LoginPage /> */}
    </div>
  );
}

export default App;

import "./App.css";
import CssBaseline from '@mui/material/CssBaseline';
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";


function App() {
  return (
    <div className="App">
      <CssBaseline />
      <LandingPage />
      {/* <LoginPage/> */}
    </div>
  );
}

export default App;

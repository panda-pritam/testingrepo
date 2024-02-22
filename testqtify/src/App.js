import logo from "./logo.svg";
// import './App.css';
import Navbar from "./components/Navbar/navBar";
import HomePage from "./pages/homePage";
import { StyledEngineProvider } from "@mui/material";

import AlbumContainer from "./components/albumContainer/albumContainer";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <StyledEngineProvider>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </StyledEngineProvider>
  );
}

export default App;

//{textLine1,textLine2,image}

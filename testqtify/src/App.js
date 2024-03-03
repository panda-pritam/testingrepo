import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/navBar";
import HomePage from "./pages/homePage";
import { StyledEngineProvider } from "@mui/material";
import { useState } from "react";
import Player from "./components/musicPlayer/Player";
import AlbumContainer from "./components/albumContainer/albumContainer";
import { Outlet } from "react-router-dom";
function App() {
  let [songData, setSongData] = useState({
    id: 11111,
    img: "https://picsum.photos/200/200",
    duration: 0,
    songName: "",
    albumName: "",
    songURL: "",
  });
  return (
    <StyledEngineProvider>
      <div className="mainDiv">
        <Navbar />
        <Outlet context={[songData, setSongData]} />
        <Player data={songData} />
      </div>
    </StyledEngineProvider>
  );
}

export default App;

//{textLine1,textLine2,image}

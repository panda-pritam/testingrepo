import logo from "./logo.svg";
// import './App.css';
import Navbar from "./components/Navbar/navBar";
import HeroSection from "./components/hero/HeroSection";
import heroImg from "./assets/hero_headphones.png";

import AlbumContainer from "./components/albumContainer/albumContainer";
function App() {
  return (
    <div>
      <Navbar />
      <HeroSection
        textLine1={"100 Thousand Songs, ad-free"}
        textLine2={"Over thousands podcast episodes"}
        image={heroImg}
      />
      <AlbumContainer />
    </div>
  );
}

export default App;

//{textLine1,textLine2,image}

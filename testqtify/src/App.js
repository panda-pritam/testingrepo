import logo from "./logo.svg";
// import './App.css';
import Navbar from "./components/Navbar/navBar";
import HeroSection from "./components/hero/HeroSection";
import heroImg from "./assets/hero_headphones.png";
function App() {
  return (
    <div>
      <Navbar />
      <HeroSection
        textLine1={"100 Thousand Songs, ad-free"}
        textLine2={"Over thousands podcast episodes"}
        image={heroImg}
      />
    </div>
  );
}

export default App;

//{textLine1,textLine2,image}

import HeroSection from "../components/hero/HeroSection";
import AlbumContainer from "../components/albumContainer/albumContainer";
import heroImg from "../assets/hero_headphones.png";

export default function HomePage() {
  return (
    <div>
      <HeroSection
        textLine1={"100 Thousand Songs, ad-free"}
        textLine2={"Over thousands podcast episodes"}
        image={heroImg}
      />
      <AlbumContainer />
    </div>
  );
}

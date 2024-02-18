import heroImg from "../../assets/hero_headphones.png";
import styles from "./hero.module.css";
export default function HeroSection() {
  return (
    <div className={styles.heroBox}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <div>100 Thousand Songs, ad-free</div>
          <div>Over thousands podcast episodes</div>
        </div>

        <img src={heroImg} alt="hero image" className={styles.heroImg} />
      </div>
    </div>
  );
}

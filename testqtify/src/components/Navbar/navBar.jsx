import Logo from "../logo/logo";
import Box from "@mui/system/Box";
import SearchBox from "../searchBox/searchBar";
import styles from "./NavBar.module.css";
import FeedbackBtn from "./feedBack";
export default function NavBar() {
  return (
    <nav className={styles.Navbar}>
      <Logo />
      <SearchBox />
      {/* <button className={styles.feedbackButton}>Give Feedback</button> */}
      <FeedbackBtn />
    </nav>
  );
}

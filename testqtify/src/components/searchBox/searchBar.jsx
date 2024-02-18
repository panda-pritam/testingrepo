import Box from "@mui/system/Box";
import searchIcon from "../../assets/search-icon.svg";
import styles from "./searchBar.module.css";
export default function SearchBox() {
  return (
    <Box className={styles.search_bar}>
      <input
        className={styles.search_input}
        placeholder="Search a albume of your choice"
      />
      <button className={styles.search_button}>
        <img src={searchIcon} className={styles.logo_img}></img>
      </button>
    </Box>
  );
}

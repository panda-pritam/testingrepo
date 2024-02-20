import Chip from "@mui/material/Chip";
import styles from "./cards.module.css";

export default function AlbumCard({ image, title, follows, id, slug }) {
  return (
    <div className={styles.cardBox}>
      <div className={styles.cardBody}>
        <div className={styles.cardImageContainer}>
          <img src={image} alt={title} className={styles.cardImage} />
        </div>
        <div className={styles.chipContainer}>
          <div className={styles.chip}>{`${follows} Follows`}</div>
          {/* <Chip label={`${follows} Follows`} className={styles.chip} /> */}
        </div>
      </div>
      <div className={styles.cardTitle}>{title}</div>
    </div>
  );
}

import getAlbums from "../../axios/getAlbums";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import AlbumCard from "../cards/albumCard";
import capitalizeFirstLetter from "../../helper/capitalizeFirstLetter";
import styles from "./albums.module.css";
import generateCardsList from "./genrateCardList";
import CardSwiper from "../cardSwipper/cardSwiper";

export default function Albums({ name }) {
  let [list, setList] = useState([]);
  let [cardsList, setCardsList] = useState([]);
  let [showAll, setShowAll] = useState(false);

  useEffect(() => {
    let list;
    (async () => {
      list = await getAlbums(name);
      console.log("List ->   ", list);
      await setList(list);
    })();
    // console.log("name-> ", name);
  }, []);
  useEffect(() => {
    let listOfCard = generateCardsList(list);
    console.log(listOfCard);
    setCardsList(listOfCard);
  }, [list]);

  let onClickHandler = (e) => {
    setShowAll(!showAll);
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.btnContainer}>
        <button className={styles.albumBtn}>{`${capitalizeFirstLetter(
          name
        )} Album`}</button>

        {showAll ? (
          <button className={styles.collapseBtn} onClick={onClickHandler}>
            Collapse
          </button>
        ) : (
          <button className={styles.collapseBtn} onClick={onClickHandler}>
            Show All
          </button>
        )}
      </Box>
      <Box>
        {showAll ? (
          <Grid container rowGap={1} columnGap={4}>
            {cardsList.length ? cardsList : "loading data"}
          </Grid>
        ) : list.length ? (
          <CardSwiper list={list} />
        ) : (
          "loading data"
        )}
        {/* {list.length ? <CardSwiper list={list} /> : "loading data"} */}
      </Box>
    </Box>
  );
}

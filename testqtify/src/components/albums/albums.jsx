import getAlbums from "../../axios/getAlbums";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import AlbumCard from "../cards/albumCard";
import capitalizeFirstLetter from "../../helper/capitalizeFirstLetter";
import styles from "./albums.module.css";

export default function Albums({ name }) {
  let [list, setList] = useState([]);
  let [cardsList, setCardsList] = useState([]);

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
    let listOfCard = printCards(list);
    console.log(listOfCard);
    setCardsList(listOfCard);
  }, [list]);
  let printCards = (list) => {
    let listOfCards = list.map((ele) => {
      return (
        <Grid item md={12 / 7}>
          <AlbumCard
            image={ele.image}
            title={ele.title}
            follows={ele.follows}
            id={ele.id}
            slug={ele.slug}
            key={ele.id}
          />
        </Grid>
      );
    });

    return listOfCards;
  };
  return (
    <Box>
      <Box className={styles.btnContainer}>
        <button className={styles.albumBtn}>{`${capitalizeFirstLetter(
          name
        )} Album`}</button>
        <button className={styles.collapseBtn}>Collapse</button>
      </Box>
      <Box>
        <Grid container spacing={2}>
          {cardsList.length ? cardsList : "loading data"}
        </Grid>
      </Box>
    </Box>
  );
}

import Grid from "@mui/material/Grid";
import AlbumCard from "../cards/albumCard";

export default function generateCardsList(list) {
  let listOfCards = list.map((ele) => {
    return (
      <Grid item lg={12 / 7} md={3} sm={4} key={ele.id}>
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
}

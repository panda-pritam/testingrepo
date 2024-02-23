import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Box from "@mui/material/Box";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
// import generateCardsList from "../albums/genrateCardList";
import AlbumCard from "../cards/albumCard";
import styles from "./swiper.module.css";
import "swiper/css/navigation";
import "./swiperBtn.css";

export default function CardSwiper({ list = [], type = "" }) {
  let [cardsList, setCardsList] = useState([]);
  let [slids, setSlides] = useState([]);
  // console.log("type", type);
  let generateCards = (list, type) => {
    if (type === "songs") {
      let arr = list.map((ele) => {
        return (
          <SwiperSlide key={ele.id} className={"swiperContainer"}>
            <AlbumCard
              image={ele.image}
              title={ele.title}
              likes={ele.likes}
              id={ele.id}
              slug={ele.slug}
              type={"songs"}
              key={ele.id}
            />
          </SwiperSlide>
        );
      });
      return arr;
    } else {
      let arr = list.map((ele) => {
        return (
          <SwiperSlide key={ele.id} className={styles.swiperContainer}>
            <AlbumCard
              image={ele.image}
              title={ele.title}
              follows={ele.follows}
              id={ele.id}
              slug={ele.slug}
              key={ele.id}
            />
          </SwiperSlide>
        );
      });
      return arr;
    }
  };
  useEffect(() => {
    // let arr = [];

    // arr = list.map((ele) => {
    //   return (
    //     <SwiperSlide key={ele.id} className={styles.swiperContainer}>
    //       <AlbumCard
    //         image={ele.image}
    //         title={ele.title}
    //         follows={ele.follows}
    //         id={ele.id}
    //         slug={ele.slug}
    //         key={ele.id}
    //       />
    //     </SwiperSlide>
    //   );
    // });

    let arr = generateCards(list, type);
    setCardsList(arr);
  }, [list]);

  // console.log("Card List ", cardsList);
  //   useEffect(()=>{});

  return (
    <>
      <Swiper
        slidesPerView={7}
        spaceBetween={30}
        freeMode={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          "@1.50": {
            slidesPerView: 7,
            spaceBetween: 30,
          },
        }}
        modules={[FreeMode, Navigation]}
        navigation={true}
        className="mySwiper"
      >
        {cardsList}
      </Swiper>
    </>
  );
}

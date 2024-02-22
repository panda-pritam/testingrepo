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
export default function CardSwiper({ list }) {
  let [cardsList, setCardsList] = useState([]);
  let [slids, setSlides] = useState([]);

  useEffect(() => {
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
    setCardsList(arr);
  }, [list]);

  console.log("Card List ", cardsList);
  //   useEffect(()=>{});

  return (
    <>
      <Swiper
        slidesPerView={7}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Navigation]}
        navigation={true}
        className="mySwiper"
      >
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
        {cardsList}
      </Swiper>
    </>
  );
}

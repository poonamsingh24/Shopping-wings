import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Pagination } from "swiper/modules";

import banner_women from "../assets/banner_women.png";
import banner_men from "../assets/banner_mens.png";
import banner_kid from "../assets/banner_kids.png";
import Container from "./Container";
import SearchInput from "./SearchInput";

export default function Banner() {
  return (
    <>
      <Container>
        <SearchInput />
      </Container>
      <div className='mt-5'>
        <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Pagination]}
          className='mySwiper'
        >
          <SwiperSlide>
            <img src={banner_women} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner_men} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner_kid} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

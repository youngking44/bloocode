"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Movie from "@/app/_home/movie/Movie";

import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IResults } from "@/types";

interface SliderProps {
  filteredMovies: IResults[] | null | undefined;
}

const Slider = ({ filteredMovies }: SliderProps) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1} // Show one slide at a time
      navigation
      breakpoints={{
        // when window width is >= 768px
        768: {
          slidesPerView: 2, // Show 2 slides
        },
        // when window width is >= 992px
        992: {
          slidesPerView: 3, // Show 3 slides
        },
        // when window width is >= 1200px
        1200: {
          slidesPerView: 4, // Show 4 slides
        },
      }}
    >
      {filteredMovies?.map((movie) => (
        <SwiperSlide key={movie.id}>
          <Movie
            id={movie.id}
            title={movie.title}
            date={movie.release_date}
            rating={movie.vote_average}
            img={movie.poster_path}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;

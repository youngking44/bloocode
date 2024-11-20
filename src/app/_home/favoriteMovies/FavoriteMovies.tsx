"use client";

import React from "react";
import Container from "@/components/container/Container";
import Slider from "./component/Slider";
import { useAppSelector } from "@/hooks/redux";

const FavoriteMovies = () => {
  const { movies } = useAppSelector((state) => state.movies);

  if (!movies || movies?.length === 0) {
    return <></>;
  }

  return (
    <section className="w-full py-14">
      <Container>
        <div className="flex flex-col gap-7">
          <h2 className="text-2xl font-bold">Favorite Movies</h2>
          <div>
            <Slider />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FavoriteMovies;

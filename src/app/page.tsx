import React from "react";
import Hero from "./_home/hero/Hero";
import Trending from "./_home/trending/Trending";
import UpcomingMovies from "./_home/upcomingMovies/UpcomingMovies";
import PopularMovies from "./_home/popularMovies/PopularMovies";
import TopRatedMovies from "./_home/topRatedMovies/TopRatedMovies";
import FavoriteMovies from "./_home/favoriteMovies/FavoriteMovies";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParamsObj = await searchParams;

  const searchQuery = Array.isArray(searchParamsObj?.query)
    ? searchParamsObj.query.join(", ")
    : searchParamsObj?.query || "";

  return (
    <main className="pb-10">
      <Hero />
      <Trending search={searchQuery} />
      <FavoriteMovies />
      <UpcomingMovies />
      <PopularMovies />
      <TopRatedMovies />
    </main>
  );
};

export default Home;

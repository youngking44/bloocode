import React from "react";
import Container from "@/components/container/Container";
import { getMovies } from "@/services/api";
import { IMovies } from "@/types";
import Slider from "@/components/slider/Slider";
import MovieSkeletons from "@/components/movieSkeletons/MovieSkeletons";

interface TrendingProps {
  search: string;
}

const Trending = async ({ search }: TrendingProps) => {
  let movies: IMovies | null = null;
  let error = null;
  let loading = true;

  try {
    movies = await getMovies("/trending/movie/week");
    loading = false;
  } catch (err) {
    loading = false;
    error = "Something went wrong";

    if (err instanceof Error) {
      error = err.message;
    }
  }

  const filteredMovies = movies?.results?.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="trending" className="w-full py-14 scroll-mt-[70px]">
      <Container>
        <div className="flex flex-col gap-7">
          <h2 className="text-2xl font-bold">Trending Movies</h2>
          {error && <p className="text-red-500">Something went wrong</p>}
          <div>
            {loading ? (
              <MovieSkeletons />
            ) : (
              <Slider filteredMovies={filteredMovies} />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Trending;

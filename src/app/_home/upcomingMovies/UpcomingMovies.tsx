import React from "react";
import Container from "@/components/container/Container";
import { getMovies } from "@/services/api";
import { IMovies } from "@/types";
import Slider from "@/components/slider/Slider";
import MovieSkeletons from "@/components/movieSkeletons/MovieSkeletons";

const UpcomingMovies = async () => {
  let movies: IMovies | null = null;
  let error = null;
  let loading = true;

  try {
    movies = await getMovies("/movie/upcoming");
    loading = false;
  } catch (err) {
    loading = false;
    error = "Something went wrong";

    if (err instanceof Error) {
      error = err.message;
    }
  }

  return (
    <section className="w-full py-14 scroll-mt-[70px]">
      <Container>
        <div className="flex flex-col gap-7">
          <h2 className="text-2xl font-bold">Upcoming Movies</h2>
          {error && <p className="text-red-500">Something went wrong</p>}
          <div>
            {loading ? (
              <MovieSkeletons />
            ) : (
              <Slider filteredMovies={movies?.results} />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default UpcomingMovies;

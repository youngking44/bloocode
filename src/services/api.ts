import { IMovieDetails } from "@/types";
import axios from "axios";

// https://api.themoviedb.org/3/discover/movie

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const moviesUrl = process.env.NEXT_PUBLIC_MOVIES_URL;

export const getMovies = async (path: string) => {
  const response = await axios.get(`${moviesUrl}${path}?api_key=${apiKey}`);

  return response.data;
};

export const getMovieDetails = async (id: string) => {
  setTimeout(() => {
    console.log("hello");
  }, 6000);
  const response = await axios.get(
    `${moviesUrl}/movie/${id}?api_key=${apiKey}`
  );

  return response.data as IMovieDetails;
};

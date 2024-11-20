"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  addFavoriteMovie,
  removeFavoriteMovie,
} from "@/redux/slice/movieSlice";
import React from "react";
import toast from "react-hot-toast";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";

interface AddMovieProps {
  id: number;
  title: string;
  date: string;
  rating: number;
  img: string;
  favorite?: boolean;
}

const AddMovie = ({
  id,
  title,
  date,
  rating,
  img,
  favorite,
}: AddMovieProps) => {
  const { movies } = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();

  const handleAddMovie = () => {
    dispatch(
      addFavoriteMovie({
        id,
        title,
        release_date: date,
        vote_average: rating,
        poster_path: img,
      })
    );

    toast.success("One movie added to favorite movies");
  };

  const handleRemoveMovie = () => {
    dispatch(
      removeFavoriteMovie({
        id,
        title,
        release_date: date,
        vote_average: rating,
        poster_path: img,
      })
    );

    toast.success("One movie removed from favorite movies");
  };

  if (movies?.find((movie) => movie.id === id) && favorite) {
    return (
      <div
        className="absolute top-2 right-2 text-white cursor-pointer"
        onClick={handleRemoveMovie}
      >
        <MdDelete size={25} />
      </div>
    );
  }

  if (movies?.find((movie) => movie.id === id)) {
    return <></>;
  }

  return (
    <div
      className="absolute top-2 right-2 text-white cursor-pointer"
      onClick={handleAddMovie}
    >
      <IoMdAdd size={25} />
    </div>
  );
};

export default AddMovie;

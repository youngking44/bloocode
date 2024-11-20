import React from "react";
import Button from "@/components/button/Button";
import { IoPlay } from "react-icons/io5";
import Image from "next/image";
import StarRating from "@/components/starRating/StarRating";
import AddMovie from "@/components/addMovie/AddMovie";
import Link from "next/link";

interface MovieProps {
  id: number;
  title: string;
  date: string;
  rating: number;
  img: string;
  favorite?: boolean;
}

const Movie = ({ id, title, date, rating, img, favorite }: MovieProps) => {
  return (
    <div className="relative group overflow-hidden">
      <div
        className="relative w-full h-[300px] transition-all duration-300 
          group-hover:scale-110"
      >
        <Image
          fill
          src={`https://image.tmdb.org/t/p/w500${img}`}
          alt={`${title} image`}
          className="object-cover"
        />
      </div>
      <div
        className="p-5 flex flex-col justify-center gap-5 absolute top-0 
        right-0 bottom-0 left-0 bg-black/60 hover:cursor-pointer"
      >
        <h4 className="text-lg font-semibold capitalize">{title}</h4>
        <p>Release Date: {date}</p>
        <p>Average Rating: {(rating / 2).toFixed(1)}</p>
        <StarRating rating={rating} />
        <div>
          <Link href={`/movies/${id}`}>
            <Button variant="primary" flex square>
              <IoPlay size={20} />
              Play Now
            </Button>
          </Link>
        </div>
      </div>
      <AddMovie
        id={id}
        title={title}
        date={date}
        rating={rating}
        img={img}
        favorite={favorite}
      />
    </div>
  );
};

export default Movie;

import Container from "@/components/container/Container";
import { getMovieDetails } from "@/services/api";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { TiMediaPlayOutline } from "react-icons/ti";

interface MovieDetailsProps {
  params: Promise<{ id: string }>;
}

const MovieDetails = async ({ params }: MovieDetailsProps) => {
  const paramsObj = await params;

  const movieDetails = await getMovieDetails(paramsObj?.id || "");

  return (
    <section className="w-full">
      <div className="text-white w-full h-[120vh] md:h-screen">
        <div className="relative w-full h-full">
          <Image
            fill
            src={`https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`}
            alt=""
            className="object-cover"
          />
        </div>
        <div className="w-full h-full pt-[180px] pb-20 absolute top-0 right-0 bottom-0 left-0 bg-black/55">
          <Container>
            <div className="relative flex flex-col md:flex-row md:items-center gap-5 md:gap-20">
              <Link
                href="/"
                className="absolute top-[-60px] left-0 cursor-pointer"
              >
                <IoArrowBackOutline size={25} />
              </Link>
              <div className="md:w-[60%] flex flex-col gap-7">
                <h1
                  className="text-4xl md:text-6xl font-bold 
                uppercase"
                >
                  {movieDetails?.title}
                </h1>
                <p>{movieDetails?.overview}</p>
                <div className="flex flex-col gap-5">
                  <p>
                    <span className="text-xl font-bold text-orange-500">
                      Genres:{" "}
                    </span>
                    {movieDetails?.genres?.map((item) => `${item.name}, `)}
                  </p>
                  <p>
                    <span className="text-xl font-bold text-orange-500">
                      Release Date:{" "}
                    </span>
                    {movieDetails?.release_date}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <button
                  className="w-[80px] h-[80px] rounded-full flex justify-center items-center
             text-white border border-white cursor-pointer"
                >
                  <TiMediaPlayOutline size={80} />
                </button>
                <span className="text-xl font-semibold uppercase">
                  Watch trailer
                </span>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;

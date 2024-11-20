import React from "react";
import Skeleton from "react-loading-skeleton";

const MovieSkeletons = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
        xl:grid-cols-4 gap-5"
    >
      <Skeleton height={300} />
      <div className="hidden md:block">
        <Skeleton height={300} />
      </div>
      <div className="hidden lg:block">
        <Skeleton height={300} />
      </div>
      <div className="hidden xl:block">
        <Skeleton height={300} />
      </div>
    </div>
  );
};

export default MovieSkeletons;

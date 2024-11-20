import React from "react";

interface StarRatingProps {
  rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => {
  const totalStars = 5; // Assuming a 5-star rating system
  const filledStars = Math.round(rating / 2); // Convert TMDb rating (0-10) to 5-star scale

  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          className={index < filledStars ? "text-yellow-500" : "text-gray-400"}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;

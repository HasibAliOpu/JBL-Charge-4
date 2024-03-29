import { StarIcon } from "@heroicons/react/solid";
import React from "react";

const Review = ({ review }) => {
  const { name, reviews, img, rating } = review;
  return (
    <div className="border-2 border-orange-400 rounded-lg">
      <span className="flex justify-center mt-1">
        <img
          src={img}
          className="rounded-full border-2 border-orange-400"
          alt=""
        />
      </span>
      <div className="p-5">
        <h1 className="text-xl font-mono font-semibold border-b-2 border-orange-300">
          {name}
        </h1>
        <p className="font-medium">{reviews.slice(0, 200)}...</p>
        <p className=" font-semibold">
          Rating: ({rating})
          <StarIcon className="w-6 h-6 inline text-yellow-400"></StarIcon>
        </p>
      </div>
    </div>
  );
};

export default Review;

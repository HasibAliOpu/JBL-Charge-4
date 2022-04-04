import React from "react";
import useReviews from "../Hooks/useReviews";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div>
      <div className="my-10">
        <h1 className="text-center text-4xl font-medium ">
          <span className="border-b-2 border-orange-400">
            Customer Reviews ({reviews.length}){" "}
          </span>
        </h1>
        <div className="grid md:grid-cols-3 gap-10 ml-7 md:p-10">
          {reviews.map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

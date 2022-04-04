import React from "react";
import LoadReviews from "../Hooks/LoadReviews";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = LoadReviews();
  return (
    <div>
      <div className="mb-5">
        <h1 className="text-center text-4xl font-medium">
          Customer Reviews ({reviews.length})
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

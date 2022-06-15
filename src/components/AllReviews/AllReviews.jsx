import React from "react";
import { getReviews } from "../../utils/Api";
import { useEffect, useState } from "react";
import CategoriesNav from "../Categories/CategoriesNav";

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isCategory, setIsCategory] = useState("");
  useEffect(() => {
    getReviews(isCategory).then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, [isCategory]);

  return (
    <div>
      <CategoriesNav setIsCategory={setIsCategory} />
      <ul className="reviews-ul">
        {reviews.map((review) => {
          return (
            <li key={review.review_id} className="reviews-card">
              <h2>{review.title}</h2>
              <img
                src={review.review_img_url}
                alt={review.title}
                className="review-img"
              />
              <h3 className="review-votes">Votes:{review.votes}</h3>
              <h4> {review.owner}</h4>
              <p>{review.category}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

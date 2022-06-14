import React from "react";
import { getReviews } from "../utils/Api";
import { useEffect, useState } from "react";

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviews().then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, []);

  console.log(reviews);

  console.log("ouside mehn <<<<<<<<<");
  return (
    <ul className="reviews-ul">
      {reviews.map((review) => {
        return (
					<div className="reviews-container">
						<li key={review.review_id} className="reviews-card">
							<img></img>
							<h2>{review.title}</h2>
							<img
								src={review.review_img_url}
								alt={review.title}
								className="review-img"
							/>
							<h3 className="review-votes">Votes:{review.votes}</h3>
							<h4> {review.owner}</h4>
						</li>
					</div>
				);
      })}
    </ul>
  );
};

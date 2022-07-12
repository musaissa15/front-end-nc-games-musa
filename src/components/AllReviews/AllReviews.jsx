import React from "react";
import { getReviews } from "../../utils/Api";
import { useEffect, useState } from "react";
import CategoriesNav from "../Categories/CategoriesNav";
import { Link } from "react-router-dom";
import {SortReviews} from "../SortReviews/SortReviews";
import { Nav } from "../Nav/Nav";

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
			<Nav />
			<CategoriesNav setIsCategory={setIsCategory} />
			<SortReviews setReviews={setReviews} />
			<ul>
				{reviews.map((review) => {
					return (
						<Link to={`/reviews/${review.review_id}`} key={review.review_id}>
							<li>
								<div className="reviews-container">
									<h2 className="review-title">{review.title}</h2>
									<img
										src={review.review_img_url}
										alt={review.title}
										className="review-img"
									/>
									<h3 className="review-votes">Votes:{review.votes}</h3>
									<h4 className="review-owner"> {review.owner}</h4>
									<p className="review-category">{review.category}</p>
								</div>
							</li>
						</Link>
					);
				})}
			</ul>
		</div>
	);
};

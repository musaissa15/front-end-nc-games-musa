import React from "react";
import { getReviews } from "../../utils/Api";
import { useEffect, useState } from "react";
import CategoriesNav from "../Categories/CategoriesNav";
import { Link } from "react-router-dom";
import { SortReviews } from "../SortReviews/SortReviews";
import Card from "react-bootstrap/Card";

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
			<SortReviews setReviews={setReviews} />
			<ul>
				<div className="reviews-list">
					{reviews.map((review) => {
						return (
							<Link to={`/reviews/${review.review_id}`} key={review.review_id}>
								<li>
									<div className="reviews-container">
										<Card className="bg-dark text-white">
											<Card.Img
												src={review.review_img_url}
												alt={review.title}
												className="review-img img-fluid"
											/>
											<Card.Title>{review.title}</Card.Title>
											<Card.Text>
												<h3 className="review-votes">Votes:{review.votes}</h3>
												<h4 className="review-owner"> {review.owner}</h4>
											</Card.Text>
											<Card.Text>
												<p className="review-category">{review.category}</p>
											</Card.Text>
										</Card>
									</div>
								</li>
							</Link>
						);
					})}
				</div>
			</ul>
		</div>
	);
};

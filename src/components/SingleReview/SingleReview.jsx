import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {getSingleReview, updateVotes} from "../../utils/Api";
import Comments from "../Comments/Comments";


const SingleReview = () => {
	const { review_id } = useParams();
	const [singleReview, setSingleReview] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [vote, setVote] = useState(0);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		getSingleReview(review_id).then((singleReviewFromApi) => {
			setSingleReview(singleReviewFromApi);
			setIsLoading(false);
		});
	}, [review_id]);



	

	const handleLikeVote = () => {
		setVote((currCount) => currCount + 1);
		updateVotes(review_id, 1).catch((error) => {
			if (error) {
				setIsError(true);
				setVote((currCount) => {
					return currCount - 1;
				});
			}
		});
	};

	const handleDislikeVote = () => {
		setVote((currCount) => {
			return currCount - 1;
		});
		updateVotes(review_id, -1).catch((error) => {
			if (error) {
				setIsError(true);
				setVote((currCount) => {
					return currCount + 1;
				});
			}
		});
	};

	return isLoading ? (
		<p>... Loading</p>
	) : isError ? (
		<p>ERROR please try again</p>
		) : (
			
			<div className="singleReview-container">
			<li>
				<h2>{singleReview.title}</h2>
				<img
					src={singleReview.review_img_url}
					alt={singleReview.title}
					className="singleReview-img"
				/>
				<p>{singleReview.review_body}</p>

				<h3>{singleReview.votes + vote}</h3>
				<button onClick={handleLikeVote} disabled={vote >= 0}>
					👍
				</button>
				<button onClick={handleDislikeVote} disabled={vote > 1 || vote < 0}>
					👎
				</button>

				<h4> {singleReview.owner}</h4>
						<p>{singleReview.category}</p>
					</li>
				
					<Comments/>
		</div>	
	);
};

export default SingleReview;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleReview, updateVotes } from "../../utils/Api";

const SingleReview = () => {
	const { review_id } = useParams();
	const [singleReview, setSingleReview] = useState();
	const [isLoading, setIsLoading] = useState(true)
	const [vote, setVote] = useState(0)

	

	useEffect(() => {
		getSingleReview(review_id).then(
			(singleReviewFromApi) => {
				setSingleReview(singleReviewFromApi)
				setIsLoading(false)
			}
			
		)},[review_id]
	)


	const handleLikeVote = () => {
		setVote((currCount) => (
		currCount + 1
		))
		updateVotes(review_id, 1).catch(() => {
			
		})
	}

	const handleDislikeVote = () => {
		setVote((currCount) => (
			currentCount - 1
		))
		updateVotes(review_id, -1).then(() => {

		})
	}
	

 return isLoading ? (
		<p>... Loading</p>
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
				<button onClick={handleLikeVote} disabled={vote >= 1}>like</button>
				<button>dislike</button>

				<h4> {singleReview.owner}</h4>
				<p>{singleReview.category}</p>
			</li>
		</div>
 );
	
};

export default SingleReview
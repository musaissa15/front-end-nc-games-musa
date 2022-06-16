import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleItem, getSingleReview } from "../../utils/Api";

const SingleReview = () => {
	const { review_id } = useParams();
	const [singleReview, setSingleReview] = useState();
	const [isLoading, setIsLoading] = useState(true)

	

	useEffect(() =>
		{getSingleReview(review_id).then(
			(singleReviewFromApi) => {
				setSingleReview(singleReviewFromApi)
				setIsLoading(false)
			},
			
		)},[review_id]
	)

console.log(singleReview);
 return isLoading ? <p>... Loading</p> :
	
		<div>
			<h1>single review </h1>
		
			<li>
				<h2>{singleReview.title}</h2>
				<img src={singleReview.review_img_url} alt={singleReview.title} />
				<h3>{singleReview.votes}</h3>
				<h4> {singleReview.owner}</h4>
				<p>{singleReview.category}</p>
			</li>
			
		</div>
	
};

export default SingleReview
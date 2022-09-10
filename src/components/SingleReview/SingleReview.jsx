import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { getSingleReview, updateVotes } from "../../utils/Api";
import Comments from "../Comments/Comments";
import { PostComments } from "../PostComments/PostComments";

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
            <div>
				<p className="single-review-text">{singleReview.review_body}</p>
            </div>

				<h3>{singleReview.votes + vote}</h3>
				<button onClick={handleLikeVote}>👍</button>
				<button onClick={handleDislikeVote}>👎</button>

				<h4> Owner: {singleReview.owner}</h4>
				<h4> Category: {singleReview.category}</h4>
			</li>
          <br />
          <br />
          <br />
			<Comments />
			<PostComments />
		</div>
	);
};

export default SingleReview;

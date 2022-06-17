import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsById } from "../../utils/Api";

const Comments = () => {
	const { review_id } = useParams();
	const [comments, setComments] = useState([]);

	useEffect(() => {
		getCommentsById(review_id).then((commentsFromApi) => {
			setComments(commentsFromApi);
		});
	}, [review_id]);
	
	return (
		<div>
			Comments
			<ul>
				{comments.map((comment) => {
					return (
						<li key={comment.comment_id}
						  className='comments-container'>
							<h4>{comment.author}</h4>
							<p>{comment.body}</p>
							<h5>{comment.created_at}</h5>
							<h3>Votes:{comment.votes}</h3>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Comments;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsById } from "../../utils/Api";
import DeleteComments from "../DeleteComments/DeleteComments.jsx";
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
			<h2>Comments</h2>
			<ul>
				{comments.map((comment) => {
					return (
						<>
							<li key={comment.comment_id} className="comments-container">
								<h4>{comment.author}</h4>
								<p>{comment.body}</p>
								<h5>{comment.created_at.slice(0, 10)}</h5>
								<h6>{comment.created_at.slice(11, 16)}</h6>
							</li>

							<DeleteComments comment={comment} />
						</>
					);
				})}
			</ul>
		</div>
	);
};

export default Comments;

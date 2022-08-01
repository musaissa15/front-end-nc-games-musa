import { useParams } from "react-router-dom";
import { deleteCommentsById } from "../../utils/Api";

const DeleteComments = ({ comment }) => {
	return (
		<div>
			<h2>Delete comments</h2>

			<button
				type="submit"
				onClick={() => {
					deleteCommentsById(comment.comment_id);
				}}
			>
				Delete
			</button>
		</div>
	);
};

export default DeleteComments;

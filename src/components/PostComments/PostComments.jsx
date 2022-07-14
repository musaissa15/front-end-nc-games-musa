import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { postTheComments } from "../../utils/Api";

export const PostComments = () => {
  const { review_id } = useParams();
  const [theComments, setTheComments] = useState("");
  const [postedComments, setPostComments] = useState({});
  const [didCommentPost, setDidCommentPost] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    postTheComments(review_id, {
      author: "jessjelly",
      body: e.target[0].value,
    }).then((postToApi) => {
      setTheComments(postToApi);
      setDidCommentPost(true);
      setPostComments(postToApi);
      setPostComments('')
      console.log(postToApi);
    });
  };
  return (
    <div>
      {didCommentPost ? <p>{postedComments.body}</p> : null}
      PostComments
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="What you Saying"
        />
        <button type="submit">{!didCommentPost ? "Submit" : "posted"}</button>
      </form>
    </div>
  );
};


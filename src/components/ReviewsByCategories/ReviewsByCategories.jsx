import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReviewsByCategories } from "../../utils/Api";

export const SingleCategory = () => {
  const { category } = useParams();
  const [SingleCategory, setSingleCategory] = useState([]);
  useEffect(() => {
    getReviewsByCategories(category).then((reviewCategoryFromApi) => {
      setSingleCategory(reviewCategoryFromApi);
    });
  }, [category]);


  return (
    <ul className="review-card">
      {SingleCategory.map((chosenReview) => {
        return (
          <li key={chosenReview.review_id}>
            <h3>{chosenReview.title}</h3>
            <img
              src={chosenReview.review_img_url}
              alt={chosenReview.title}
              className="review-img"
            />
            <h3 className="review-votes">Votes:{chosenReview.votes}</h3>
            <h4> {chosenReview.owner}</h4>
          </li>
        );
      })}
    </ul>
  );
};

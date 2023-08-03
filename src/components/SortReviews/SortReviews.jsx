import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getReviewsByQueries } from "../../utils/Api";
import SortBy from "./SortBy";
import OrderBy from "./OrderBy";
export const SortReviews = ({setReviews}) => {
    const [isLoading, setIsLoading] = useState(true);
		const [sortByValue, setSortByValue] = useState("created_at");
		const [orderByValue, setOrderByValue] = useState("desc");
  const [searchTerm, setSearchTerm] = useSearchParams({
		sort_by: "",
		order: "",
  });
	const {review} = useParams()
	
	

  useEffect(() => {
		getReviewsByQueries(review, sortByValue, orderByValue).then(
      (reviewsFromApi) => {
         if (reviewsFromApi.length !== 0) {
						setReviews(reviewsFromApi);
						setIsLoading(false);
					}
			}
		);
	}, [review, sortByValue, orderByValue]);







  return (
		<>
			<SortBy
				sortByValue={sortByValue}
				setSortByValue={setSortByValue}
				setSearchTerm={setSearchTerm}
			/>
			<OrderBy
				orderByValue={orderByValue}
				setOrderByValue={setOrderByValue}
				setSearchTerm={setSearchTerm}
				sortByValue={sortByValue}
			/>
		</>
	);
};

import { useEffect, useState } from "react";
import { getCategories } from "../../utils/Api";
import { Link } from "react-router-dom";

const CategoriesNav = ({ setIsCategory }) => {
	const [categories, setCategories] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		getCategories().then((categoriesFromApi) => {
			setCategories(categoriesFromApi);
			setIsLoading(false);
		});
	}, []);

	return isLoading ? (
		<p>...loading</p>
	) : (
		<div>
			<ul>
				{categories.map((category) => {
					return (
						<div className="category-nav">
							<li key={category.slug}>
								
                                <Link
									to={`/reviews/${category.slug}`}
									value={category.slug}
									onClick={() => {
										setIsCategory(category.slug);
									}}
								>
									{category.slug}
								</Link>
							</li>
						</div>
					);
				})}
			</ul>
		</div>
	);
};

export default CategoriesNav;

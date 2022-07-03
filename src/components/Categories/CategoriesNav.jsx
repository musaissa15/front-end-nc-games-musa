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
        <li key="all" className="category-nav">
          <Link
            to={"/reviews"}
            value="all"
            onClick={() => {
              setIsCategory("");
            }}
          >
            all
          </Link>
        </li>
        {categories.map((category) => {
          return (
            <li key={category.slug} className="category-nav">
              <Link
                to={"/reviews"}
                value={category.slug}
                onClick={() => {
                  setIsCategory(category.slug);
                }}
              >
                {category.slug}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoriesNav;

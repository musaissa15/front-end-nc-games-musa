import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react';
import {getCategoriesByReview_id} from '../utils/Api';


export const SingleCategory = () => {
    const {category} = useParams()
    const [SingleCategory, setSingleCategory] = useState([])
    useEffect(() => {
        getCategoriesByReview_id(category).then((categoryFromApi) => {
            setSingleCategory(categoryFromApi)
            console.log(categoryFromApi);
        })
    },[category])

        console.log(category);

    return (
      
        <ul>
            {SingleCategory.map(chosenReview => {
             return <li key={chosenReview.review_id}>
                 <img src={chosenReview.review_img_url} alt={chosenReview.title } />
                 <h3>
                     {chosenReview.title}
                 </h3>
          </li>
            })}
        </ul>
  )
}

const axios = require("axios");
const gamesApi = axios.create({
  baseURL: "https://exampleapp-musa113.herokuapp.com/api",
});

export const getReviews = (category) => {
  let queryString = "/reviews";
  if (category) queryString += `?category=${category}`;
  return gamesApi.get(queryString).then(({ data }) => {
    return data.reviews;
  });
};


export const getReviewsByCategories = (category) => {
  return gamesApi.get(`/reviews?category=${category}`).then(({ data }) => {
    return data.reviews;
  });
};

export const getCategories = () => {
  return gamesApi.get("/categories").then(({ data }) => {
    return data.categories;
  });
};

export const getSingleReview = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}`).then(({data}) => {
    return data.review
  })
}


export const updateVotes = (review_id, inc_votes) => {
  return gamesApi.patch(`/reviews/${review_id}`, {inc_votes}).then(({data}) => {
    return data.review
  })
}

export const commentsById = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}/comments`).then(({data}) => {
    return data.comments
  })
}
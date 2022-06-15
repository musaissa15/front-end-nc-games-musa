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

//we going to acpet categories as parameter
// if categories is an empty string we are conditional calling reviews again
//if there is a category then we are calling to /reviews?category=${category}

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

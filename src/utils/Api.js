const axios = require("axios");
const gamesApi = axios.create({
  baseURL: "https://exampleapp-musa113.herokuapp.com/api",
});

export const getReviews = () => {
  return gamesApi.get("/reviews").then(({ data }) => {
    return data.reviews;
  });
};

import { combineReducers } from "redux";

const moviesReducer = (state, action) => {
  console.log("movies", action);
  return {
    movies: [
      { title: "2001: A Space Odyssey", year: 1968, rating: 8.3, id: 1 },
      { title: "Inception", year: 2010, rating: 8.8, id: 2 },
      { title: "The Shawshank Redemption", year: 1994, rating: 9.2, id: 3 },
      { title: "The Godfather", year: 1972, rating: 9.2, id: 4 },
      { title: "The Dark Knight", year: 2008, rating: 9.0, id: 5 },
      { title: "Alien", year: 1979, rating: 8.5, id: 6 },
      { title: "Prometheus", year: 2012, rating: 7.0, id: 7 },
      { title: "Kill Bill: Vol. 1", year: 2003, rating: 8.2, id: 8 },
    ],
  };
};

const selectedMovieReducer = (state, action) => {
  console.log("selected", action);
  if (action.type === "SELECT_MOVIE") {
    return { ...state, currentMovie: action.payload.movie };
  }
  return null;
};

const combinedReducers = combineReducers({
  selectedMovieReducer,
  moviesReducer,
});

export default combinedReducers;

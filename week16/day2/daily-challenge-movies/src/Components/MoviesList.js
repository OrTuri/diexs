import Movie from "./Movie";
import { connect } from "react-redux";
import { selectMovie } from "../Actions/actions";

const MoviesList = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <h1 style={{ alignSelf: "center" }}>Movies</h1>
      {props.movies.map((movie) => {
        return (
          <Movie onClick={props.selectMovie} movie={movie} key={movie.id} />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.moviesReducer.movies,
  };
};

const mapActionToProps = (dispatch) => {
  return {
    selectMovie: (movie) => dispatch(selectMovie(movie)),
  };
};

export default connect(mapStateToProps, mapActionToProps)(MoviesList);

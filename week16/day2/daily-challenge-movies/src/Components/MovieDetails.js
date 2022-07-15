import { connect } from "react-redux";

const MovieDetails = (props) => {
  return (
    <div style={{ width: "400px" }}>
      <h1 style={{ marginBottom: "20px" }}>Movie details</h1>
      <div>
        <h2>{props?.movie?.title}</h2>
        <p>Year: {props?.movie?.year}</p>
        <p>Rating: {props?.movie?.rating}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movie: state.selectedMovieReducer?.currentMovie,
  };
};
export default connect(mapStateToProps)(MovieDetails);

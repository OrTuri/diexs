const Movie = (props) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "left",
        minWidth: "450px",
      }}
    >
      <h2>{props.movie.title}</h2>
      <button
        style={{ marginLeft: "auto", display: "block" }}
        onClick={props.onClick.bind(null, props.movie)}
      >
        Details
      </button>
    </div>
  );
};

export default Movie;

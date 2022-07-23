import MovieCard from "./Card";
import { useSelector } from "react-redux";

const CardsContainer = () => {
  const { results } = useSelector((state) => state.search);
  if (!results)
    return <h3 className="text-center">Could not find what you looked for!</h3>;
  return (
    <div className="d-flex flex-wrap gap-3 justify-content-center">
      {results.map((result) => (
        <MovieCard
          key={result.imdbID}
          src={result.Poster}
          title={result.Title}
          year={result.Year}
          id={result.imdbID}
        />
      ))}
    </div>
  );
};

export default CardsContainer;

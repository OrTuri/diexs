import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import axios from "axios";

const MoviePage = () => {
  const { id } = useParams();
  console.log(id);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    axios({
      url: `https://www.omdbapi.com/?i=${id}&apikey=6bea3b4d`,
      method: "GET",
    }).then((res) => {
      setMovie(res.data);
      console.log(res.data);
    });
  }, []);
  if (!movie) return <h1>LOADING...</h1>;
  return (
    <div className="row mt-4 m-auto">
      <div className="card card-body col-md-4">
        <img alt="" src={movie.Poster} className="thumbnail fluid rounded" />
      </div>
      <div className="col-md-8 mt-4">
        <h2 className="text-center mb-4">{movie.Title}</h2>
        <Card className="m-auto">
          <ListGroup variant="flush">
            <ListGroup.Item>
              <span className="fw-bold">Genre:</span> {movie.Genre}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="fw-bold">Released:</span> {movie.Year}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="fw-bold">Rated:</span> {movie.Rated}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="fw-bold">IMDB Rating:</span> {movie.imdbRating}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="fw-bold">Director:</span> {movie.Director}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="fw-bold">Writer:</span> {movie.Writer}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="fw-bold">Actors:</span> {movie.Actors}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
      <div className="col-12 mt-4">
        <Card>
          <Card.Header>Summary</Card.Header>
          <Card.Body>
            <Card.Text>{movie.Plot}</Card.Text>
            <a
              className="btn btn-success"
              href={`https://www.imdb.com/title/${id}`}
              target="__blank"
            >
              Read more on IMDB
            </a>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default MoviePage;

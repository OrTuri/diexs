import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const MovieCard = ({ title, src, year, id }) => {
  return (
    <Card style={{ width: "18rem" }} className="text-center">
      <Card.Img variant="top" src={src} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title>{title}</Card.Title>
        <Card.Text>Year: {year}</Card.Text>
        <Link to={`/search/${id}`}>
          <Button variant="primary">More details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;

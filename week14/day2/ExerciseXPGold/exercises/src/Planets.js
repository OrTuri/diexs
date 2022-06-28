import ListGroup from "react-bootstrap/ListGroup";

const Planets = ({ planets }) => {
  return (
    <ListGroup style={{ width: "350px" }} className="m-auto mb-3">
      {planets.map((planet, index) => {
        return <ListGroup.Item key={index}>{planet}</ListGroup.Item>;
      })}
    </ListGroup>
  );
};

export default Planets;

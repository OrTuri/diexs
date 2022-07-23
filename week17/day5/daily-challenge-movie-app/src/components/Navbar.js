import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import imdbLogo from "../imdb-logo-transparent.png";
import reactLogo from "../pngegg.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" className="rounded">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-white text-decoration-none">
            Movies Search
          </Link>
        </Navbar.Brand>
        <Nav className="ms-auto align-items-center gap-3">
          <img src={imdbLogo} alt="" style={{ width: "100px" }} className="" />
          <img src={reactLogo} alt="" style={{ width: "50px" }} className="" />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;

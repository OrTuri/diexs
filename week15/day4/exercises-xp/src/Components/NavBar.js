import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, BrowserRouter } from "react-router-dom";

function NavBar(props) {
  return (
    <>
      <Container className="p-2">
        <Navbar bg="primary" variant="dark" className="rounded p-2 px-4">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link style={{ color: "#fff", margin: "0 10px" }} to="/">
              Home
            </Link>
            <Link style={{ color: "#fff", margin: "0 10px" }} to="/profile">
              Profile
            </Link>
            <Link style={{ color: "#fff", margin: "0 10px" }} to="/shop">
              Shop
            </Link>
            <Link style={{ color: "#fff", margin: "0 10px" }} to="/getdata">
              Data
            </Link>
          </Nav>
        </Navbar>
      </Container>
    </>
  );
}

export default NavBar;

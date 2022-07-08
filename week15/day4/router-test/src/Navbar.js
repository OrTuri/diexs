import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ color: "#fff" }}>
      <Link style={{ margin: "0 10px" }} to="/">
        Home
      </Link>
      <Link style={{ margin: "0 10px" }} to="/profile">
        Profile
      </Link>
      <Link style={{ margin: "0 10px" }} to="/shop">
        Shop
      </Link>
    </div>
  );
};

export default Navbar;

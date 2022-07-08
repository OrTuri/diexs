import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return <h1>Home!</h1>;
};

const Profile = () => {
  return <h1>Profile!</h1>;
};

const Shop = () => {
  return <h1>Shop!</h1>;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

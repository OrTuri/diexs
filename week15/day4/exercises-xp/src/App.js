import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./Components/ErrorBoundary";
import PostList from "./Components/PostList";
import Example1 from "./Components/Example1";
import Example2 from "./Components/Example2";
import Example3 from "./Components/Example3";

const Home = (props) => {
  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
};

const Profile = (props) => {
  return (
    <div>
      <h1>Profile page</h1>
    </div>
  );
};

const Shop = (props) => {
  throw new Error("I am carshing!");
  return (
    <div>
      <h1>Shop page</h1>
    </div>
  );
};

const axios = require("axios").default;

const getData = async () => {
  try {
    const res = await axios({
      method: "POST",
      url: "https://webhook.site/30932683-658d-41c0-8f3b-a295ea060694",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      data: {
        key1: "myusername",
        email: "mymail@gmail.com",
        name: "Isaac",
        lastname: "Doe",
        age: 27,
      },
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

const Data = () => {
  return (
    <button onClick={getData}>Click here to see data in the console</button>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ErrorBoundary key={"1"}>
                <Home />
              </ErrorBoundary>
            }
          />
          <Route
            path="/profile"
            element={
              <ErrorBoundary key={"2"}>
                {" "}
                <Profile />
              </ErrorBoundary>
            }
          />
          <Route
            path="/shop"
            element={
              <ErrorBoundary key={"3"}>
                <Shop />
              </ErrorBoundary>
            }
          />
          <Route path="/getdata" element={<Data />} />
        </Routes>
      </BrowserRouter>
      <PostList />
      <Example1 />
      <Example2 />
      <Example3 />
    </div>
  );
}

export default App;

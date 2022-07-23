import "./App.css";
import NavBar from "./components/Navbar";
import SearchBox from "./components/SearchBox";
import CardsContainer from "./components/CardsContainer";
import { Routes, Route } from "react-router-dom";
import MoviePage from "./components/MoviePage";

function App() {
  return (
    <div className="container mt-2">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBox />
              <CardsContainer />
            </>
          }
        />
        <Route path="/search/:id" element={<MoviePage />} />
      </Routes>
    </div>
  );
}

export default App;

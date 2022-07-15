import "./App.css";
import MoviesList from "./Components/MoviesList";
import MovieDetails from "./Components/MovieDetails";

function App() {
  return (
    <div className="App">
      <h1 style={{ margin: "40px" }}>Redux Movies</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "90px",
        }}
      >
        <MoviesList />
        <MovieDetails />
      </div>
    </div>
  );
}

export default App;

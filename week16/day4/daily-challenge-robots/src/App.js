import "./App.css";
import CardsContainer from "./Components/CardsContainer";
import SearchInput from "./Components/SearchInput";
function App() {
  return (
    <div className="App">
      <h1>Robots</h1>
      <SearchInput />
      <CardsContainer />
    </div>
  );
}

export default App;

import "./App.css";
import MathOperarion from "./Components/MathOperarion";
import ErrorBoundary from "./Components/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <MathOperarion />
      </ErrorBoundary>
    </div>
  );
}

export default App;

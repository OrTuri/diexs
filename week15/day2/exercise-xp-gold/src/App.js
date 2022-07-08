import "./App.css";
import ErrorBoundary from "./ErrorBoundary";
import ErrorComponent from "./ErrorComponent";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;

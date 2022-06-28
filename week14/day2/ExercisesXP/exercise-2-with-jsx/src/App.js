import logo from "./logo.svg";
import "./App.css";

const myelement = <h1>I Love JSX!</h1>;
const sum = 5 + 5;

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      {myelement}
      <h2>React is {sum} times better with JSX</h2>
    </div>
  );
}

export default App;

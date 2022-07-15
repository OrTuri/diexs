import "./App.css";
import { connect } from "react-redux";
import Counter from "./Components/Counter";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

const mapStateFromProps = (state) => {
  return {
    test: state.test,
  };
};

export default connect(mapStateFromProps)(App);

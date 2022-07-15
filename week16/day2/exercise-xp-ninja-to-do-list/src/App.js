import "./App.css";
import InputForm from "./Components/InputForm";
import FilterButtons from "./Components/FilterButtons";
import FilteredTodos from "./Containers/FilteredTodos";

function App() {
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <InputForm />
      <FilteredTodos />
      <FilterButtons />
    </div>
  );
}

export default App;

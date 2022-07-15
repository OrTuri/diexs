import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card icon="fa-solid fa-hand-point-right" title="Points" amount="3,000" />
      <Card icon="fa-solid fa-bolt" title="Lightning" amount="6,540" />
      <Card
        icon="fa-solid fa-handshake-simple"
        title="Shakes"
        amount="337,010"
      />
      <Card icon="fa-solid fa-gem" title="Diamonds" amount="98,661" />
    </div>
  );
}

export default App;

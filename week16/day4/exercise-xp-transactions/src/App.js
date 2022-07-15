import "./App.css";
import TransactionForm from "./Components/TransactionForm";
import TransactionsList from "./Components/TransactionsList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Financial Transactions</h1>
        <TransactionForm />
        <TransactionsList />
      </header>
    </div>
  );
}

export default App;

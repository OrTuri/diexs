import "./App.css";
import PostList from "./Components/PostList";
import UsersList from "./Components/UsersList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PostList />
        <UsersList />
      </header>
    </div>
  );
}

export default App;

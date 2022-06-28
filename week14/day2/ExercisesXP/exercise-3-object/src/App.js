import "./App.css";
import UserFavoriteColors from "./UserFavoriteColors";

function App() {
  const user = {
    first_name: "Bob",
    last_name: "Dylan",
    fav_animals: ["Horse", "Turtle", "Elephant", "Monkey"],
  };

  return (
    <div className="App">
      <h3>
        {user.first_name} {user.last_name}
      </h3>
      <ul style={{ listStyleType: "circle", listStylePosition: "inside" }}>
        <UserFavoriteColors favAnimals={user.fav_animals} />
      </ul>
    </div>
  );
}

export default App;

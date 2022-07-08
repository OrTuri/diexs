import "./App.css";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import data from "./data.json";
import CardsContainer from "./Components/CardsContainer";
import { useState } from "react";

const getRandomNumbers = (min, max, amount) => {
  const randomNumber = () => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  };
  const numArr = [];
  for (let i = 0; i < amount; i++) {
    let randomNum = randomNumber();
    while (numArr.includes(randomNum)) {
      randomNum = randomNumber();
    }
    numArr.push(randomNum);
  }
  return numArr;
};

const App = () => {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const randomNumbers = getRandomNumbers(0, 11, 12);
  const gameLogic = (id) => {
    if (clickedCards.includes(id)) {
      if (topScore < score) {
        setTopScore((state) => {
          return score;
        });
      }
      setScore(0);
      setClickedCards([]);
      return;
    }
    setScore((state) => {
      return score + 1;
    });
    setClickedCards((state) => {
      return [...state, id];
    });
  };
  return (
    <div className="App">
      <Navbar score={score} topScore={topScore} />
      <CardsContainer>
        {data.superheroes.map((superhero, i) => {
          return (
            <Card
              id={data.superheroes[randomNumbers[i]].id}
              handleClick={gameLogic}
              key={data.superheroes[randomNumbers[i]].id}
              src={data.superheroes[randomNumbers[i]].image}
              name={data.superheroes[randomNumbers[i]].name}
              occupation={data.superheroes[randomNumbers[i]].occupation}
            />
          );
        })}
      </CardsContainer>
    </div>
  );
};

export default App;

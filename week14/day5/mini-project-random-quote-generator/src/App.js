import "./App.css";
import quotes from "./quotes";
import Quote from "./Quote";
import { useState } from "react";

function App() {
  const getRandumNumber = (max) => {
    return Math.floor(Math.random() * max);
  };

  const generateQuote = () => {
    const randoNumber = getRandumNumber(quotes.length);
    return quotes[randoNumber];
  };

  const [quote, setQuote] = useState(generateQuote());

  const setNewQuote = () => {
    setQuote((prevQuote) => {
      let newQuote = generateQuote();
      while (prevQuote.quote === newQuote.quote) {
        newQuote = generateQuote();
      }
      return newQuote;
    });
  };

  const generateRandomCssColor = () => {
    const rgb = [0, 0, 0].map((item) => {
      return getRandumNumber(255);
    });
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  };
  const randomColor = generateRandomCssColor();

  return (
    <div className="App" style={{ backgroundColor: randomColor }}>
      <Quote getQuote={setNewQuote} quoteData={quote} color={randomColor} />
    </div>
  );
}

export default App;

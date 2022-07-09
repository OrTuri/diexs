import { useState, useEffect } from "react";
import style from "./AutoCompletedText.module.css";
import countries from "../countries";
const AutoCompletedText = (props) => {
  const [suggestions, setSuggestion] = useState([]);
  const [text, setText] = useState("");
  const filterCountries = (e) => {
    setText(e.target.value);
  };
  useEffect(() => {
    const filteredCountries = countries.filter((country) => {
      return country.toLowerCase().includes(text.toLowerCase());
    });
    setSuggestion(filteredCountries);
    console.log(suggestions);
  }, [text]);
  return (
    <div>
      <h1>Auto Complete</h1>
      <input className={style.input} onChange={filterCountries} />
      <div className={style.results}>
        <div>
          {suggestions.map((suggestion, i) => {
            return (
              <p key={i} className={style.result}>
                {suggestion}
              </p>
            );
          })}
        </div>
      </div>
      <h3>{suggestions.length} suggestions</h3>
    </div>
  );
};

export default AutoCompletedText;

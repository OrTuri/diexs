import style from "./SearchBox.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = (props) => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${inputValue}`, { replace: true });
    e.target.reset();
  };
  return (
    <div className={style.container}>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search for images..."
          className={style.input}
        />
        <button className={style.btn}>Search</button>
      </form>
    </div>
  );
};

export default SearchBox;

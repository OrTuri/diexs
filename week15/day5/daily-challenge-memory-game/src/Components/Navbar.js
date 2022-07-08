import style from "./Navbar.module.css";

const Navbar = (props) => {
  const { topScore, score } = props;
  return (
    <div>
      <div className={style["main-nav"]}>
        <h1 className={style.heading}>Superhero memory game</h1>
        <div className={style.scores}>
          <p>
            Score: <span className={style.score}>{score}</span>
          </p>
          <p>
            Top Score: <span className={style.score}>{topScore}</span>
          </p>
        </div>
      </div>
      <div className={style["secondary-nav"]}>
        <p className={style.instructions}>
          Get points by clicking on an image no more than one time!
        </p>
      </div>
    </div>
  );
};

export default Navbar;

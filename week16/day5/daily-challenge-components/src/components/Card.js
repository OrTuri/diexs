import style from "./Card.module.css";

const Card = ({ title, icon, amount }) => {
  return (
    <div className={style["main-container"]}>
      <div className={style["icon-title-container"]}>
        <i className={`${icon} ${style.icon}`}></i>
        <p className={style.title}>{title}</p>
      </div>
      <div>
        <h2 className={style.amount}>{amount}</h2>
      </div>
    </div>
  );
};

export default Card;

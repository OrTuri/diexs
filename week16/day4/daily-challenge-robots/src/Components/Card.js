import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={style["main-container"]}>
      <img
        className={style.img}
        src={`https://robohash.org/${props.id}?size=200x200`}
        alt="Robot"
      />
      <h3 className={style.name}>{props.name}</h3>
      <p className={style.email}>{props.email}</p>
    </div>
  );
};

export default Card;

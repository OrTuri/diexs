import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={style.container}>
      <img className={style.img} src={props.src} alt="" />
      <h3 className={style.username}>{props.username}</h3>
      <p className={style.email}>{props.email}</p>
    </div>
  );
};

export default Card;

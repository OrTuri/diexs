import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={style.container}>
      <img className={style.img} src={props.src} alt="" />
    </div>
  );
};

export default Card;

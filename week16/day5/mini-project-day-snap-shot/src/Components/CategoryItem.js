import { Link } from "react-router-dom";
import style from "./CategoryItem.module.css";

const CategoryItem = ({ name, link }) => {
  return (
    <Link to={link}>
      <div className={style["category-container"]}>
        <p className={style.category}>{name}</p>
      </div>
    </Link>
  );
};

export default CategoryItem;

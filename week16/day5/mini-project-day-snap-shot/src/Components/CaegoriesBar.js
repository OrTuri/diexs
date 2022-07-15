import style from "./CategoriesBar.module.css";
import CategoryItem from "./CategoryItem";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Categories = (props) => {
  return (
    <div
      style={{ flexDirection: `${props.row ? "row" : "column"}` }}
      className={style.container}
    >
      <CategoryItem link={"/categories/animals"} name="Animals" />
      <CategoryItem link={"/categories/cars"} name="Cars" />
      <CategoryItem link={"/categories/mountains"} name="Mountains" />
      <CategoryItem link={"/categories/cities"} name="Cities" />
      <CategoryItem link={"/categories/beaches"} name="Beaches" />
      <CategoryItem link={"/categories/nature"} name="Nature" />
      <CategoryItem link={"/categories/planets"} name="Planets" />
    </div>
  );
};

const CategoriesBar = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  if (window.innerWidth > 850) {
    return <Categories row />;
  }
  return (
    <>
      <div
        onClick={() => setOpenMenu(!openMenu)}
        className={style["expandable-container"]}
      >
        <p className={style.choose}>Choose category</p>
        <GiHamburgerMenu className={style.icon} />
      </div>
      {openMenu && <Categories column />}
    </>
  );
};

export default CategoriesBar;

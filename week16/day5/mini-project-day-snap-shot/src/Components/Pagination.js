import style from "./Pagination.module.css";
import { useDispatch, useSelector } from "react-redux";
import { next, prev } from "../features/paginationSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.pagination);
  return (
    <div className={style.container}>
      <button onClick={() => dispatch(prev())} className={style.btn}>
        Prev
      </button>
      <div className={style.page}>
        <p>{page}</p>
      </div>
      <button onClick={() => dispatch(next())} className={style.btn}>
        Next
      </button>
    </div>
  );
};

export default Pagination;

import { useSelector, useDispatch } from "react-redux";
import { updatePhotosPerPage } from "../features/paginationSlice";

const PhotosPerPageSelect = (props) => {
  const { photosPerPage } = useSelector((state) => state.pagination);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <p>Photos per page: </p>
      <select
        onChange={(e) => dispatch(updatePhotosPerPage(e.target.value))}
        value={photosPerPage}
        style={{
          padding: "10px",
          borderRadius: "10px",
          border: "none",
          boxShadow: "rgb(0 0 0 / 15%) 0px 0px 16px 7px",
        }}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
      </select>
    </div>
  );
};

export default PhotosPerPageSelect;

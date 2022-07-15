import style from "./PhotoGallery.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGalleryImages } from "../features/gallerySlice";
import Card from "./Card";
import { useParams, useLocation } from "react-router-dom";
import { resetPage, setPath } from "../features/paginationSlice";

const PhotoGallery = (props) => {
  const { galleryImages, isLoading } = useSelector((state) => state.gallery);
  const { page, path, photosPerPage } = useSelector(
    (state) => state.pagination
  );
  const { searchValue } = useParams();
  const dispatch = useDispatch();
  const currentPath = useLocation().pathname;
  if (currentPath !== path) {
    dispatch(resetPage());
    dispatch(setPath(currentPath));
  }
  useEffect(() => {
    dispatch(fetchGalleryImages({ searchValue, page, photosPerPage }));
  }, [searchValue, page, dispatch, photosPerPage]);
  return isLoading ? (
    <h1 className={style.loading}>LOADING...</h1>
  ) : (
    <div className={style.container}>
      {galleryImages.map((image) => {
        return <Card key={image.id} src={image.src.medium} />;
      })}
    </div>
  );
};

export default PhotoGallery;

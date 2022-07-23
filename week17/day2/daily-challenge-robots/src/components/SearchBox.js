import { useSelector, useDispatch } from "react-redux";
import { search } from "../features/searchSlice";
import { filterRobots } from "../features/robotSlice";
import { useEffect } from "react";

const SearchBox = () => {
  const { searchValue } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterRobots(searchValue));
  }, [searchValue]);
  return (
    <input
      onChange={(e) => {
        dispatch(search(e.target.value));
      }}
      placeholder="Search Robots..."
      value={searchValue}
    />
  );
};

export default SearchBox;

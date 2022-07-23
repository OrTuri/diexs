import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { enterSearch, fetchData } from "../features/searchSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const { searchValue } = useSelector((state) => state.search);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchData(searchValue));
  };
  return (
    <div className="bg-secondary mt-4 rounded text-center p-4 mb-4">
      <h2 className="display-5 mb-4">Search for movies, TV Shows...</h2>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Control
            onChange={(e) => {
              dispatch(enterSearch(e.target.value));
            }}
            value={searchValue}
            type="text"
            placeholder="The dark knight"
            style={{ maxWidth: "400px" }}
            className="m-auto"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          SEARCH
        </Button>
      </Form>
    </div>
  );
};

export default SearchBox;

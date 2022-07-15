import "./App.css";
import SearchBox from "./Components/SearchBox";
import PhotoGallery from "./Components/PhotoGallery";
import CategoriesBar from "./Components/CaegoriesBar";
import { Routes, Route, Link } from "react-router-dom";
import Pagination from "./Components/Pagination";
import PhotosPerPageSelect from "./Components/PhotosPerPageSelect";

function App() {
  return (
    <div className="App">
      <Link to="/">
        <h1>Snapshot</h1>
      </Link>
      <SearchBox />
      <CategoriesBar />
      <PhotosPerPageSelect />
      <Routes>
        <Route path="/" element={<PhotoGallery search="views" />} />
        <Route
          path="/categories/:searchValue"
          element={<PhotoGallery search="planets" />}
        />
        <Route path="/search/:searchValue" element={<PhotoGallery />}></Route>
      </Routes>
      <Pagination />
    </div>
  );
}

export default App;

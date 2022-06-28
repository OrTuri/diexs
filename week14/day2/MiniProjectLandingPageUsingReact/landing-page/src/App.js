import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Card from "./Components/Card";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Header />
      <div className="App container">
        <div className="row">
          <Card
            className="col-12 justify-content-start align-items-center"
            iconClass={"fa-solid fa-building"}
            title={"About the company"}
            body={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos
          quia laborum omnis odio. Rem repellendus eveniet necessitatibus
          consectetur. Sint, optio rerum minima assumenda similique ipsa magni!
          Ut, soluta dolores?`}
          />
          <Card
            bg={"#f6f6f6"}
            className="col-12 justify-content-start align-items-center"
            iconClass={"fa-solid fa-globe"}
            title={"Our values"}
            body={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos
          quia laborum omnis odio. Rem repellendus eveniet necessitatibus
          consectetur. Sint, optio rerum minima assumenda similique ipsa magni!
          Ut, soluta dolores?`}
          />
          <Card
            className="col-12 justify-content-start align-items-center"
            iconClass={"fa-solid fa-landmark"}
            title={"Our mission"}
            body={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos
          quia laborum omnis odio. Rem repellendus eveniet necessitatibus
          consectetur. Sint, optio rerum minima assumenda similique ipsa magni!
          Ut, soluta dolores?`}
          />
        </div>
        <Contact />
      </div>
    </>
  );
}

export default App;

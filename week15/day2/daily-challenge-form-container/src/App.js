import Form from "./Components/Form";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./Components/Display";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({});

  const getFormData = (dataObject) => {
    setFormData({ ...dataObject });
  };

  return (
    <div className="App">
      <Form getFormData={getFormData} />
      <Display formData={formData} />
    </div>
  );
}

export default App;

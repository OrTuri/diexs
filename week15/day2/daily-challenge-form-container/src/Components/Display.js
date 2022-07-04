import { Component } from "react";
import Checkbox from "@mui/material/Checkbox";

class Display extends Component {
  render() {
    return (
      <div className="mt-4">
        <h1>Form Data</h1>
        <div>
          <p>
            <span className="fw-bold">First Name:</span>{" "}
            {this.props.formData?.firstName}
          </p>
        </div>
        <div>
          <p>
            <span className="fw-bold">Last Name:</span>{" "}
            {this.props.formData?.lastName}
          </p>
        </div>
        <div>
          <p>
            <span className="fw-bold">Gender:</span>{" "}
            {this.props.formData?.gender}
          </p>
        </div>
        <div>
          <p>
            <span className="fw-bold">Destination:</span>{" "}
            {this.props.formData?.destination}
          </p>
        </div>
        <div>
          <p>
            <span className="fw-bold">Nuts free:</span>{" "}
            {this.props.formData?.nutsFree ? "Yes" : "No"}
          </p>
        </div>
        <div>
          <p>
            <span className="fw-bold">Lactose free:</span>{" "}
            {this.props.formData?.LactoseFree ? "Yes" : "No"}
          </p>
        </div>
        <div>
          <p>
            <span className="fw-bold">Vegan:</span>{" "}
            {this.props.formData?.vegan ? "Yes" : "No"}
          </p>
        </div>
      </div>
    );
  }
}

export default Display;

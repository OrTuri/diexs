import { Component } from "react";
import style from "./Form2.module.css";

class Form2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        firstName: null,
        lastName: null,
        phone: null,
        email: null,
      },
    };
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.setState(() => {
      return {
        formData: {
          firstName: e.target.firstName.value,
          lastName: e.target.lastName.value,
          phone: e.target.phone.value,
          email: e.target.email.value,
        },
      };
    });
  };

  checkValidity = () => {
    return Object.values(this.state.formData).some((item) => !item);
  };

  resetHandler = () => {
    this.setState(() => {
      return {
        formData: {
          firstName: null,
          lastName: null,
          phone: null,
          email: null,
        },
      };
    });
  };

  render() {
    return (
      <div className={style["main-container"]}>
        <h1 className={style.heading}>Welcome!</h1>
        <p>Please provide your information below.</p>
        {this.checkValidity() ? (
          <form
            name="form"
            className={style.form}
            onSubmit={this.submitHandler}
          >
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              required
            />
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              required
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required
            />
            <button>Submit</button>
          </form>
        ) : (
          <div>
            <p>
              Welcome, {this.state.formData.firstName}{" "}
              {this.state.formData.lastName}
            </p>
            <p>
              {this.state.formData.phone} | {this.state.formData.email}
            </p>
            <button onClick={this.resetHandler}>Reset</button>
          </div>
        )}
      </div>
    );
  }
}

export default Form2;

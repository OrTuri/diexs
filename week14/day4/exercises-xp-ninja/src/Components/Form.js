import { Component } from "react";
import Input from "./Input";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        email: null,
        phone: null,
        firstName: null,
        lastName: null,
      },
      formMsg: {
        email: "",
        phone: "",
        firstName: "",
        lastName: "",
      },
    };
  }

  checkPhoneValidity = (e) => {
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (e.target.value === "") {
      this.setState(() => {
        return {
          formMsg: {
            ...this.state.formMsg,
            phone: "You must enter an phone number!",
          },
        };
      });
    } else if (!regex.test(e.target.value)) {
      this.setState(() => {
        return {
          formMsg: {
            ...this.state.formMsg,
            phone: "You must enter a valid phone number with 10 digits!",
          },
        };
      });
    } else {
      this.setState(() => {
        return {
          formMsg: {
            ...this.state.formMsg,
            phone: "",
          },
        };
      });
    }
  };

  checkEmailValidity = (e) => {
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(e.target.value);
    if (e.target.value === "") {
      this.setState(() => {
        return {
          formMsg: {
            ...this.state.formMsg,
            email: "You must enter an email address!",
          },
        };
      });
    } else if (!regEmail.test(e.target.value)) {
      this.setState(() => {
        return {
          formMsg: {
            ...this.state.formMsg,
            email: "You must enter a valid email address!",
          },
        };
      });
    } else {
      this.setState(() => {
        return {
          formMsg: {
            ...this.state.formMsg,
            email: "",
          },
        };
      });
    }
  };

  onChangerHandler = (e) => {
    this.setState(
      () => {
        return {
          formData: {
            ...this.state.formData,
            [e.target.name]: e.target.value,
          },
        };
      },
      () => {
        console.log(this.state.formData);
      }
    );
  };

  checkNameValidity = (e) => {
    if (e.target.value === "") {
      this.setState(() => {
        return {
          formMsg: {
            ...this.state.formMsg,
            [e.target.name]: "You must enter a name!",
          },
        };
      });
    } else {
      this.setState(() => {
        return {
          formMsg: {
            ...this.state.formMsg,
            [e.target.name]: "",
          },
        };
      });
    }
  };

  render() {
    return (
      <div>
        <form
          style={{
            backgroundColor: "#f3f5f7",
            width: "350px",
            height: "500px",
            margin: "auto",
            marginTop: "30px",
            padding: "50px",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Input
            name={"firstName"}
            onBlurHandler={this.checkNameValidity}
            onChangerHandler={this.onChangerHandler}
            placeholder={"John"}
            label={"First Name"}
            msg={this.state.formMsg.firstName}
          />
          <Input
            name={"lastName"}
            onBlurHandler={this.checkNameValidity}
            onChangerHandler={this.onChangerHandler}
            placeholder={"Doe"}
            label={"Last Name"}
            msg={this.state.formMsg.lastName}
          />
          <Input
            name={"phone"}
            onBlurHandler={this.checkPhoneValidity}
            onChangerHandler={this.onChangerHandler}
            placeholder={"054-8733162"}
            label={"Phone Number"}
            msg={this.state.formMsg.phone}
          />
          <Input
            name={"email"}
            onBlurHandler={this.checkEmailValidity}
            onChangerHandler={this.onChangerHandler}
            placeholder={"John@google.com"}
            label={"Email"}
            msg={this.state.formMsg.email}
          />
        </form>
      </div>
    );
  }
}

export default Form;

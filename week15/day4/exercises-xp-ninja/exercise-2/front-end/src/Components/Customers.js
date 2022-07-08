import { Component } from "react";
import axios from "axios";
import style from "./Customers.module.css";

class Customers extends Component {
  constructor() {
    super();
    this.state = { customers: [] };
  }

  async componentDidMount() {
    const res = await axios({ url: "/api/customers" });
    const data = res.data;
    this.setState({ customers: data });
  }

  render() {
    return (
      <div className={style.container}>
        {this.state.customers.map((customer, i) => {
          return (
            <p key={i}>
              {customer.firstName} {customer.lastName}
            </p>
          );
        })}
      </div>
    );
  }
}

export default Customers;

import { Component } from "react";
import data from "../data.json";
import Card from "react-bootstrap/Card";

class PostList extends Component {
  render() {
    return data.map((item) => {
      return (
        <Card style={{ width: "350px", margin: "50px auto" }} key={item.id}>
          <Card.Header as="h5">{item.title}</Card.Header>
          <Card.Body>
            <Card.Title>{item.date}</Card.Title>
            <Card.Text>{item.content}</Card.Text>
          </Card.Body>
        </Card>
      );
    });
  }
}

export default PostList;

import { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        title: null,
        year: null,
        author: null,
        genre: null,
      },
    };
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.setState((state, props) => {
      return {
        formData: {
          title: e.target.title.value,
          year: e.target.year.value,
          genre: e.target.genre.value,
          author: e.target.author.value,
        },
      };
    });
  };

  render() {
    if (Object.values(this.state.formData).some((item) => item === "")) {
      this.msg = <p style={{ color: "red" }}>There was a problem!</p>;
    } else if (Object.values(this.state.formData).every((item) => item)) {
      this.msg = (
        <p style={{ color: "green" }}>Form submitted successfully!!</p>
      );
      console.log(this.state.formData);
    }

    return (
      <div>
        <h1>New Book</h1>
        <form
          onSubmit={this.submitHandler}
          name="bookForm"
          style={{ width: "fit-content", margin: "auto" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <label htmlFor="title">Title</label>
            <input id="title" name="title" type="text" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <label htmlFor="author">Author</label>
            <input id="author" name="author" type="text" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <label htmlFor="genre">Genre</label>
            <input id="genre" name="genre" type="text" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <label htmlFor="year">Year Published</label>
            <input id="year" name="year" type="text" />
          </div>
          <button style={{ marginTop: "10px" }}>Submit</button>
        </form>
        {this.msg}
      </div>
    );
  }
}

export default Form;

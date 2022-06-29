import { Component } from "react";
import style from "./Quote.module.css";
import { lightSpeedIn } from "react-animations";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  bounce: {
    animationName: lightSpeedIn,
    animationDuration: "0.8s",
  },
});

class Quote extends Component {
  render() {
    return (
      <header className={style["main-container"]}>
        <div>
          <h2
            key={this.props.quoteData.quote}
            className={`${style.quote} ${css(styles.bounce)}`}
            style={{ color: this.props.color }}
          >
            <i className={`fa-solid fa-quote-left ${style.icon}`}></i>
            {this.props.quoteData.quote}
            <i className={`fa-solid fa-quote-right ${style.icon}`}></i>
          </h2>
        </div>
        <div className={style["btn-author-container"]}>
          <p
            className={`${style.author} ${css(styles.bounce)}`}
            key={this.props.quoteData.author}
          >
            -{this.props.quoteData.author}-
          </p>
          <button
            className={style.btn}
            onClick={this.props.getQuote}
            style={{ backgroundColor: this.props.color }}
          >
            New quote
          </button>
        </div>
      </header>
    );
  }
}

export default Quote;

import { Component } from "react";
import style from "./Clock.module.css";

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      year: new Date().getFullYear(),
      month: new Date().toLocaleDateString("en-il", { month: "short" }),
      weekday: new Date().getDay(),
      day: new Date().getDate(),
      hour: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds(),
    };
  }

  componentDidMount() {
    this.timeInterval = setInterval(() => {
      this.setState((state, props) => {
        return {
          year: new Date().getFullYear(),
          month: new Date().toLocaleDateString("en-il", { month: "short" }),
          weekday: new Date().getDay(),
          day: new Date().getDate(),
          hour: new Date().getHours(),
          minutes: new Date().getMinutes(),
          seconds: new Date().getSeconds(),
        };
      });
    }, 1000);
  }

  componentDidUpdate() {
    clearInterval(this.timeInterval);
  }

  render() {
    return (
      <div className={style["main-container"]}>
        <div className={style["month-year-container"]}>
          <h3 className={style.year}>Year: {this.state.year}</h3>
          <h3 className={style.month}>Month: {this.state.month}</h3>
        </div>
        <div className={style["clock-container"]}>
          <div
            className={`${style.hand} ${style.hour}`}
            style={{
              transform: `translateX(-50%) rotate(${
                (this.state.minutes + this.state.seconds / 60) / 60 +
                (this.state.hour / 12) * 360
              }deg)`,
            }}
          ></div>
          <div
            className={`${style.hand} ${style.minute}`}
            style={{
              transform: `translateX(-50%) rotate(${
                ((this.state.minutes + this.state.seconds / 60) / 60) * 360
              }deg)`,
            }}
          ></div>
          <div
            className={`${style.hand} ${style.second}`}
            style={{
              transform: `translateX(-50%) rotate(${
                (this.state.seconds / 60) * 360
              }deg)`,
            }}
          ></div>
          <div className={`${style.number} ${style.number1}`}>1</div>
          <div className={`${style.number} ${style.number2}`}>2</div>
          <div className={`${style.number} ${style.number3}`}>3</div>
          <div className={`${style.number} ${style.number4}`}>4</div>
          <div className={`${style.number} ${style.number5}`}>5</div>
          <div className={`${style.number} ${style.number6}`}>6</div>
          <div className={`${style.number} ${style.number7}`}>7</div>
          <div className={`${style.number} ${style.number8}`}>8</div>
          <div className={`${style.number} ${style.number9}`}>9</div>
          <div className={`${style.number} ${style.number10}`}>10</div>
          <div className={`${style.number} ${style.number11}`}>11</div>
          <div className={`${style.number} ${style.number12}`}>12</div>
        </div>
      </div>
    );
  }
}

export default Clock;

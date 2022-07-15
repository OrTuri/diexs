import { createStore } from "redux";
import reducer from "../Reducers/index";

const store = createStore(reducer, { count: 0 });

export default store;

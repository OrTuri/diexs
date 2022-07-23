import { configureStore } from "@reduxjs/toolkit";
import ageCounterReducer from "./features/ageCounterSlice";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = configureStore({
  reducer: { ageCounter: ageCounterReducer },
  middleware: [thunk, logger],
});

export default store;

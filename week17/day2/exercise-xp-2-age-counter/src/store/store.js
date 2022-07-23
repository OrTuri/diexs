import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import ageReducer from "../features/ageSlice";

const logger =
  ({ getState, dispatch }) =>
  (next) =>
  (action) => {
    console.log(action);
    next(action);
  };

const store = configureStore({
  reducer: { age: ageReducer },
  middleware: [thunk, logger],
});

export default store;

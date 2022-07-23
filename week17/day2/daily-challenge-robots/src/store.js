import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import robotReducer from "./features/robotSlice";
import searchReducer from "./features/searchSlice";
import logger from "redux-logger";

const store = configureStore({
  reducer: { robot: robotReducer, search: searchReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

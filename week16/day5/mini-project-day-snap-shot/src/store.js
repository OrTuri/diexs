import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "./features/gallerySlice";
import paginationReducer from "./features/paginationSlice";

export const store = configureStore({
  reducer: {
    gallery: galleryReducer,
    pagination: paginationReducer,
  },
});

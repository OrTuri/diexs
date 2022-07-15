import { createSlice } from "@reduxjs/toolkit";

const initialState = { page: 1, path: "/", photosPerPage: 20 };

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    next: (state, action) => {
      state.page += 1;
    },
    prev: (state, action) => {
      if (state.page === 1) return;
      state.page -= 1;
    },
    resetPage: (state, action) => {
      state.page = 1;
    },
    setPath: (state, action) => {
      state.path = action.payload;
    },
    updatePhotosPerPage: (state, action) => {
      state.photosPerPage = action.payload;
    },
  },
});

export const { next, prev, resetPage, setPath, updatePhotosPerPage } =
  paginationSlice.actions;

export default paginationSlice.reducer;

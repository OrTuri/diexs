import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk(
  "search/fetchData",
  async (searchValue) => {
    try {
      const res = await axios({
        url: `https://www.omdbapi.com/?s=${searchValue}&apikey=6bea3b4d`,
        method: "GET",
      });
      return res.data.Search;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

const initialState = {
  searchValue: "",
  loading: false,
  results: [],
  error: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    enterSearch: (state, action) => {
      state.searchValue = action.payload;
    },
  },
  extraReducers: {
    [fetchData.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.loading = false;
      state.results = action.payload;
    },
    [fetchData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { enterSearch } = searchSlice.actions;

export default searchSlice.reducer;

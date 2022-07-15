import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGalleryImages = createAsyncThunk(
  "fetchGalleryImages",
  async ({ searchValue = "views", page, photosPerPage }, thunkAPI) => {
    const res = await axios({
      url: `https://api.pexels.com/v1/search?page=${page}&query=${searchValue}&per_page=${photosPerPage}`,
      method: "GET",
      headers: {
        Authorization: process.env.REACT_APP_PEXEL_API_KEY,
      },
    });
    const data = res.data;
    return data;
  }
);

const initialState = {
  galleryImages: [],
  isLoading: true,
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGalleryImages.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchGalleryImages.fulfilled]: (state, action) => {
      state.galleryImages = action.payload.photos;
      state.isLoading = false;
    },
    [fetchGalleryImages.rejected]: (state, action) => {
      state.isLoading = true;
    },
  },
});

export default gallerySlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const ageUpLoad = createAsyncThunk("ageCounter/ageUpLoad", async () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, 5000);
  });
});

const initialState = { age: 20, loadingAgeUp: false };

const ageCounterSlice = createSlice({
  name: "ageCounter",
  initialState,
  reducers: {
    ageDown: (state, action) => {
      state.age -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(ageUpLoad.pending, (state, action) => {
      state.loadingAgeUp = true;
    });
    builder.addCase(ageUpLoad.fulfilled, (state, action) => {
      state.loadingAgeUp = false;
      state.age += 1;
    });
  },
});

export const { ageDown } = ageCounterSlice.actions;
export default ageCounterSlice.reducer;

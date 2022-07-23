import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  age: 20,
};

const ageSlice = createSlice({
  name: "age",
  initialState,
  reducers: {
    ageUp: (state, action) => {
      state.age += 1;
    },

    ageDown: (state, action) => {
      state.age -= 1;
    },
  },
});

export const { ageUp, ageDown } = ageSlice.actions;

export default ageSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRobots = createAsyncThunk(
  "robot/fetchRobots",
  async (state, thunkAPI) => {
    const res = await axios({
      url: "https://jsonplaceholder.typicode.com/users",
      method: "GET",
    });
    return res.data;
  }
);

const initialState = {
  robots: [],
  isLoading: true,
  filteredRobots: [],
};

const robotSlice = createSlice({
  name: "robot",
  initialState,
  reducers: {
    filterRobots: (state, action) => {
      state.filteredRobots = state.robots.filter((robot) => {
        return robot.username
          .toLowerCase()
          .includes(action.payload.toLowerCase());
      });
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchRobots.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRobots.fulfilled, (state, action) => {
      state.isLoading = false;
      state.robots = action.payload;
      state.filteredRobots = action.payload;
    });
    builder.addCase(fetchRobots.rejected, (state, action) => {
      state.isLoading = true;
    });
  },
});

export const { filterRobots } = robotSlice.actions;

export default robotSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const trendsSlice = createSlice({
  name: "trendsData",
  initialState: {
    data: [],
  },
  reducers: {
    saveDataToTrends: (state, action) => {
      state.data = [...action.payload];
    },
  },
});

export const { saveDataToTrends } = trendsSlice.actions;

export default trendsSlice.reducer;

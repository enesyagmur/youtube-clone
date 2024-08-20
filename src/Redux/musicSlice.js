import { createSlice } from "@reduxjs/toolkit";

export const musicSlice = createSlice({
  name: "musicsData",
  initialState: {
    data: [],
  },
  reducers: {
    saveDataToMusics: (state, action) => {
      state.data = [...action.payload];
    },
  },
});

export const { saveDataToMusics } = musicSlice.actions;

export default musicSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "homeData",
  initialState: {
    data: [],
  },
  reducers: {
    saveDataToHome: (state, action) => {
      state.data = [...action.payload];
    },
  },
});

export const { saveDataToHome } = homeSlice.actions;

export default homeSlice.reducer;

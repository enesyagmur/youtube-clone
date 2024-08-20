import { createSlice } from "@reduxjs/toolkit";

export const shortSlice = createSlice({
  name: "shortsData",
  initialState: {
    data: [],
  },
  reducers: {
    saveDataToShorts: (state, action) => {
      state.data.push(...action.payload);
    },
  },
});

export const { saveDataToShorts } = shortSlice.actions;

export default shortSlice.reducer;

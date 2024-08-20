import { createSlice } from "@reduxjs/toolkit";

export const liveSlice = createSlice({
  name: "liveData",
  initialState: {
    data: [],
  },
  reducers: {
    saveDataToLive: (state, action) => {
      state.data = [...action.payload];
    },
  },
});

export const { saveDataToLive } = liveSlice.actions;

export default liveSlice.reducer;

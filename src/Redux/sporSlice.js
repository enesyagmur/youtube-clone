import { createSlice } from "@reduxjs/toolkit";

export const sporSlice = createSlice({
  name: "sporsData",
  initialState: {
    data: [],
  },
  reducers: {
    saveDataToSpors: (state, action) => {
      state.data.push(...action.payload);
    },
  },
});

export const { saveDataToSpors } = sporSlice.actions;

export default sporSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "gamesData",
  initialState: {
    data: [],
  },
  reducers: {
    saveDataToGames: (state, action) => {
      state.data = [...action.payload];
    },
  },
});

export const { saveDataToGames } = gameSlice.actions;

export default gameSlice.reducer;

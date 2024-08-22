import { createSlice } from "@reduxjs/toolkit";

export const topChannelsSlice = createSlice({
  name: "topChannelsData",
  initialState: {
    data: [],
  },
  reducers: {
    saveDataToTopChannels: (state, action) => {
      state.data.push(...action.payload);
    },
  },
});

export const { saveDataToTopChannels } = topChannelsSlice.actions;

export default topChannelsSlice.reducer;

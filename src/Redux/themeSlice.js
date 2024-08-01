import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    colors: ["bg-black", "text-white", "bg-neutral-800"],
  },
  reducers: {
    changeMode: (state) => {
      if (state.colors[0] === "bg-black") {
        state.colors[0] = "bg-white";
        state.colors[1] = "text-black";
        state.colors[2] = "bg-neutral-200";
      } else {
        state.colors[0] = "bg-black";
        state.colors[1] = "text-white";
        state.colors[2] = "bg-neutral-800";
      }
    },
  },
});

export const { changeMode } = themeSlice.actions;

export default themeSlice.reducer;

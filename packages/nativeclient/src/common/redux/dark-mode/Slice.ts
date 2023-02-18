import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DarkMode, getDarkMode } from "../../helpers/DarkMode";

const currentDarkMode = getDarkMode();

let initialState = currentDarkMode;

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    updateDarkMode: (state: any, action: PayloadAction<DarkMode>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { updateDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;

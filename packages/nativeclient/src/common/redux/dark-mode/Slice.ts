import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum DarkMode {
  light = "light",
  dark = "dark",
}

const currentDarkMode =
  localStorage.getItem("darkMode") === "dark" ? DarkMode.dark : DarkMode.light;
if (currentDarkMode === DarkMode.dark) {
  document.documentElement.classList.add(DarkMode.dark);
  document.documentElement.classList.remove(DarkMode.light);
} else {
  document.documentElement.classList.add(DarkMode.light);
  document.documentElement.classList.remove(DarkMode.dark);
}
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

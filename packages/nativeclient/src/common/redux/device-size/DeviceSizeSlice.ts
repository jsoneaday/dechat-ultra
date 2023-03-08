import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum DeviceSize {
  Mobile = "Mobile",
  SmallDesktop = "SmallDesktop",
  Desktop = "Desktop",
}

let initialState: DeviceSize = DeviceSize.Desktop;

export const deviceSizeSlice = createSlice({
  name: "deviceSize",
  initialState,
  reducers: {
    updateDeviceSize: (state: any, action: PayloadAction<DeviceSize>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { updateDeviceSize } = deviceSizeSlice.actions;
export default deviceSizeSlice.reducer;

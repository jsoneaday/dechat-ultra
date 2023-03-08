import { configureStore } from "@reduxjs/toolkit";
import DeviceSizeReducer from "./device-size/DeviceSizeSlice";

export const reducers = {
  deviceSize: DeviceSizeReducer,
};

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

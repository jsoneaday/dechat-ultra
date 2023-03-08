import { RootState } from "../Store";
import { useAppSelector, useAppDispatch } from "../StoreHook";
import { DeviceSize, updateDeviceSize } from "./DeviceSizeSlice";

export function useDeviceReducer(): [
  deviceSize: DeviceSize,
  setDeviceSize: (deviceSize: DeviceSize) => void
] {
  const deviceSize = useAppSelector((state: RootState) => state.deviceSize);

  const dispatch = useAppDispatch();
  function setDeviceSize(deviceSize: DeviceSize) {
    const result = updateDeviceSize(deviceSize);
    dispatch(result);
    console.log("setDeviceSize", result, deviceSize);
  }

  return [deviceSize, setDeviceSize];
}

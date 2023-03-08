import { useDeviceReducer } from "./DeviceSizeHooks";
import { it, describe, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { DeviceSize } from "./DeviceSizeSlice";
import * as DeviceSizeSlice from "./DeviceSizeSlice";
import { useEffect } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../Store";

describe("Test DeviceSizeHooks", () => {
  it("check value of deviceSize is SmallDesktop", async () => {
    vi.spyOn(DeviceSizeSlice, "updateDeviceSize").mockImplementationOnce(
      () => ({
        payload: DeviceSize.SmallDesktop,
        type: "deviceSize/updateDeviceSize" as const,
      })
    );

    function MockComponent({
      deviceSizeParam,
    }: {
      deviceSizeParam: DeviceSize;
    }) {
      const [deviceSize, setDeviceSize] = useDeviceReducer();
      useEffect(() => {
        setDeviceSize(deviceSizeParam);
      }, []);
      return <div data-testid="device-size">{deviceSize}</div>;
    }

    render(
      <ReduxProvider store={store}>
        <MockComponent deviceSizeParam={DeviceSize.Desktop} />
      </ReduxProvider>
    );

    const deviceSizeElement = screen.getByTestId("device-size");
    expect(deviceSizeElement.textContent).not.toBe(DeviceSize.Desktop);
    expect(deviceSizeElement.textContent).toBe(DeviceSize.SmallDesktop);
  });
});

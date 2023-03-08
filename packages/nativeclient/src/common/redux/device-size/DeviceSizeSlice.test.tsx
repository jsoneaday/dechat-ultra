import { expect, describe, it } from "vitest";
import { DeviceSize, updateDeviceSize } from "./DeviceSizeSlice";

describe("Test DeviceSize Slice", () => {
  it("check updateDeviceSize is SmallDesktop", async () => {
    const action = updateDeviceSize(DeviceSize.SmallDesktop);
    expect(action.payload).toBe(DeviceSize.SmallDesktop);
  });
});

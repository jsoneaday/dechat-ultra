import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Nav";
import { DeviceSize } from "../../common/redux/device-size/DeviceSizeSlice";

export interface LayoutProps {
  deviceSize: DeviceSize;
}

export default function Layout({
  deviceSize = DeviceSize.Desktop,
}: LayoutProps) {
  const location = useLocation();
  return (
    <div
      data-testid="layout-root"
      className="h-screen bg-primary text-primary sm:max-2xl:grid sm:max-2xl:gap-2 sm:max-2xl:grid-cols-4 sm:max-2xl:grid-rows-1"
    >
      {deviceSize === DeviceSize.Mobile ? null : <Nav />}
      <div className="sm:max-2xl:col-span-2">
        <Outlet />
      </div>
      {deviceSize === DeviceSize.Mobile ||
      deviceSize === DeviceSize.SmallDesktop ? null : (
        <div data-testid="popular-root">Pops</div>
      )}
    </div>
  );
}

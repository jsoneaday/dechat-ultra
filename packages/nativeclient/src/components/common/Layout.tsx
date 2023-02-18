import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const isMobile = false;

export default function Layout() {
  return (
    <div className="bg-primary text-primary sm:max-2xl:grid sm:max-2xl:gap-2 sm:max-2xl:grid-cols-4 sm:max-2xl:grid-rows-1">
      {isMobile ? null : <Nav />}
      <div className="sm:max-2xl:col-span-2">
        <Outlet />
      </div>
      {isMobile ? null : <div>Pops</div>}
    </div>
  );
}
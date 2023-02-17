import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="grid gap-2 grid-cols-4 grid-rows-1">
      <div>Menu</div>
      <div className="col-span-2">
        <Outlet />
      </div>
      <div>Pops</div>
    </div>
  );
}

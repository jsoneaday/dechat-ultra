import { FC } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Nav";

export interface LayoutProps {
  isMobile: boolean;
}

export default function Layout({ isMobile = false }: LayoutProps) {
  const location = useLocation();
  return (
    <div
      data-testid="layout-root"
      className="h-screen bg-primary text-primary sm:max-2xl:grid sm:max-2xl:gap-2 sm:max-2xl:grid-cols-4 sm:max-2xl:grid-rows-1"
    >
      {isMobile ? null : <Nav />}
      <div className="sm:max-2xl:col-span-2">
        <Outlet />
      </div>
      {isMobile ? null : <div data-testid="popular-root">Pops</div>}
    </div>
  );
}

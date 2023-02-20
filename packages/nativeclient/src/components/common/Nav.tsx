import { NavLink } from "react-router-dom";

const activeClassCss = "";

export default function Nav() {
  return (
    <nav
      data-testid="nav-root"
      className="flex flex-col justify-start items-start"
    >
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeClassCss : undefined)}
      >
        Home
      </NavLink>
      <NavLink
        to="/topics"
        className={({ isActive }) => (isActive ? activeClassCss : undefined)}
      >
        Topics
      </NavLink>
      <NavLink
        to="/notifications"
        className={({ isActive }) => (isActive ? activeClassCss : undefined)}
      >
        Notifications
      </NavLink>
    </nav>
  );
}

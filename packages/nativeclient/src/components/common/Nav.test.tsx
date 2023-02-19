import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "@testing-library/react-hooks";
import { describe, it, expect, vi, beforeEach } from "vitest";
import RouterObj, {
  createMemoryRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Nav from "./Nav";
import { RouterType } from "./Routing";

describe("Test nav menus", () => {
  let router: RouterType | undefined;

  beforeEach(() => {
    router = createMemoryRouter(
      createRoutesFromElements(<Route path="/" element={<Nav />} />)
    );
  });

  it("All nav menus render successfully", async () => {
    render(<RouterProvider router={router!} />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Topics")).toBeInTheDocument();
    expect(screen.getByText("Notifications")).toBeInTheDocument();
  });

  it.only("Router navigates to Topics from Home", async () => {
    const user = userEvent.setup();
    render(<RouterProvider router={router!} />);
    expect(screen.getByText("Topics")).toBeInTheDocument();
    const location = vi.spyOn(RouterObj, "useLocation");
    act(() => {
      console.log("before pathname", location.mock.results[0].value);
    });

    await user.click(screen.getByText("Topics"));
    act(() => {
      console.log("after pathname", location.mock.results[0].value);
    });
  });
});

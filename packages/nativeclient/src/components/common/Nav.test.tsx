import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  createMemoryRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Nav from "./Nav";
import router from "./Routing";

describe("Test nav menus", () => {
  it("All nav menus render successfully", async () => {
    const router = createMemoryRouter(
      createRoutesFromElements(<Route path="/" element={<Nav />} />)
    );
    render(<RouterProvider router={router!} />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Topics")).toBeInTheDocument();
    expect(screen.getByText("Notifications")).toBeInTheDocument();
  });

  it.only("Router navigates to Topics from Home", async () => {
    const user = userEvent.setup();
    render(<RouterProvider router={router} />);
    expect(screen.getByText("Topics")).toBeInTheDocument();

    await user.click(screen.getByText("Topics"));
    console.log("pathname", document.URL);
  });
});

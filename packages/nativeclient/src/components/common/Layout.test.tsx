import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  createMemoryRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { describe, it, expect } from "vitest";
import Layout from "./Layout";

describe("Test Layout components", () => {
  it("Verify each column is created for desktops", async () => {
    const router = createMemoryRouter(
      createRoutesFromElements(<Route path="/" element={<Layout />} />)
    );
    render(<RouterProvider router={router} />);
    expect(screen.getByTestId("layout-root")).toBeInTheDocument();
    expect(screen.getByTestId("nav-root")).toBeInTheDocument();
    expect(screen.getByTestId("popular-root")).toBeInTheDocument();
  });
});

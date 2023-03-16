import { render, screen } from "@testing-library/react";
import {
  createMemoryRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { describe, it, expect } from "vitest";
import Layout from "./Layout";
import { DeviceSize } from "../../common/redux/device-size/DeviceSizeSlice";

describe("Test Layout components", () => {
  it("verify only single column for mobile", async () => {
    const router = createMemoryRouter(
      createRoutesFromElements(
        <Route path="/" element={<Layout deviceSize={DeviceSize.Mobile} />} />
      )
    );
    render(<RouterProvider router={router} />);
    screen.getByTestId("layout-root");
    expect(screen.queryByTestId("nav-root")).not.toBeInTheDocument();
    expect(screen.queryByTestId("popular-root")).not.toBeInTheDocument();
  });
});

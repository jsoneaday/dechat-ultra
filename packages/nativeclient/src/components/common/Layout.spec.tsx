import { render, screen } from "@testing-library/react";
import {
  createMemoryRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { describe, it } from "vitest";
import Layout from "./Layout";
import { DeviceSize } from "../../common/redux/device-size/DeviceSizeSlice";

describe("Test Layout components", () => {
  it("Verify each column is created for desktops", async () => {
    const router = createMemoryRouter(
      createRoutesFromElements(
        <Route path="/" element={<Layout deviceSize={DeviceSize.Desktop} />} />
      )
    );
    render(<RouterProvider router={router} />);
    screen.getByTestId("layout-root");
    screen.getByTestId("nav-root");
    screen.getByTestId("popular-root");
  });
});

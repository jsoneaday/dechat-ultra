import { screen, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../../App";
import {
  createMemoryRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Nav from "./Nav";

describe("Test nav menus", () => {
  it("All nav menus render successfully", async () => {
    const router = createMemoryRouter(
      createRoutesFromElements(<Route path="/" element={<Nav />} />)
    );

    render(<App router={router} />);
  });
});

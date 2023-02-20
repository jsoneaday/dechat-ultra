import { render, screen } from "@testing-library/react";
import {
  createMemoryRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { describe, it } from "vitest";
import App from "./App";
import router from "./components/common/Routing";

describe("Testing App routing", () => {
  it("App renders successfully without exception", async () => {
    const router = createMemoryRouter(
      createRoutesFromElements(<Route path="/" />)
    );
    render(<App router={router} />);
  });

  it("App renders with darkMode classes", async () => {
    render(<App router={router} />);
    const layoutRoot = screen.getByTestId("layout-root");
    expect(layoutRoot).toBeInTheDocument();
    expect(layoutRoot.classList.contains("bg-primary")).toBe(true);
    expect(layoutRoot.classList.contains("text-primary")).toBe(true);
  });
});

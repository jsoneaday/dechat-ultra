import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../App";
import router from "./Routing";
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

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Topics")).toBeInTheDocument();
    expect(screen.getByText("Notifications")).toBeInTheDocument();
  });
});

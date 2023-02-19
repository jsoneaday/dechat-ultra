import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../App";
import router from "./Routing";

describe("Test nav menus", () => {
  it("All nav menus render successfully", async () => {
    render(<App router={router} />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Topics")).toBeInTheDocument();
    expect(screen.getByText("Notifications")).toBeInTheDocument();
  });
});

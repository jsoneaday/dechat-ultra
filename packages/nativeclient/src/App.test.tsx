import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import router from "./components/common/Routing";

describe("Testing App routing", () => {
  it("App renders successfully", async () => {
    render(<App router={router} />);
  });
});

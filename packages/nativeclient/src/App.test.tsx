import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import App from "./App";
import router from "./components/common/Routing";

describe("Testing App routing", () => {
  it("App renders successfully", async () => {
    render(<App router={router} />);
  });
});

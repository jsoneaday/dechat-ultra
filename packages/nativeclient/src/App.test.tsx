import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";
import router from "./components/common/Routing";

describe("Testing App routing", () => {
  it("Switches from Home to Topics successfully", async () => {
    const user = userEvent.setup();
    render(<App router={router} />);
    console.log("before pathname", window.location.pathname);

    await user.click(screen.getByText("Topics"));
    console.log("after pathname", window.location.pathname);
  });
});

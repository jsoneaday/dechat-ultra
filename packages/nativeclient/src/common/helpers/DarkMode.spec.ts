import { expect, describe, it } from "vitest";
import { DarkMode, getDarkMode, setDarkMode } from "./DarkMode";

describe("Test darkMode helpers", () => {
  setDarkMode(DarkMode.Dark);

  it("sets darkMode to light from dark", async () => {
    setDarkMode(DarkMode.Light);
    const currentDarkMode = getDarkMode();
    expect(currentDarkMode).toBe(DarkMode.Light);
  });

  it("gets darkMode as dark when it is set to dark", async () => {
    setDarkMode(DarkMode.Dark);
    const currentDarkMode = getDarkMode();
    expect(currentDarkMode).toBe(DarkMode.Dark);
  });
});

export enum DarkMode {
  Light = "light",
  Dark = "dark",
}

export function setDarkMode(darkMode: DarkMode = DarkMode.Light) {
  const root = document.querySelector(":root");
  if (darkMode === DarkMode.Dark) {
    root?.classList.remove(DarkMode.Light);
    root?.classList.add(DarkMode.Dark);
  } else {
    root?.classList.remove(DarkMode.Dark);
    root?.classList.add(DarkMode.Light);
  }
  localStorage.setItem("darkMode", darkMode);
}

export function getDarkMode() {
  const localStorageDarkMode =
    localStorage.getItem("darkMode") === DarkMode.Dark
      ? DarkMode.Dark
      : DarkMode.Light;
  if (
    !document.querySelector(":root")?.classList.contains(localStorageDarkMode)
  ) {
    throw new Error("LocalStorage and root darkMode setting does not match");
  }
  return localStorageDarkMode;
}

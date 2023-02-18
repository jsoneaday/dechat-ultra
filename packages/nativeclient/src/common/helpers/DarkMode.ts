export enum DarkMode {
  Light = "light",
  Dark = "dark",
}

export function setDarkMode(darkMode: DarkMode) {
  if (darkMode === DarkMode.Dark) {
    document.documentElement.classList.add(DarkMode.Dark);
    document.documentElement.classList.remove(DarkMode.Light);
  } else {
    document.documentElement.classList.add(DarkMode.Light);
    document.documentElement.classList.remove(DarkMode.Dark);
  }
  localStorage.setItem("darkMode", darkMode);
}

export function getDarkMode() {
  return localStorage.getItem("darkMode") === DarkMode.Dark
    ? DarkMode.Dark
    : DarkMode.Light;
}

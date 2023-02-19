import "./App.css";
import { createMemoryRouter, RouterProvider, Router } from "react-router-dom";

import { useEffect } from "react";
import { DarkMode, setDarkMode } from "./common/helpers/DarkMode";

interface AppProps {
  router: ReturnType<typeof createMemoryRouter>;
}

function App({ router }: AppProps) {
  useEffect(() => {
    setDarkMode(DarkMode.Dark);
  }, []);

  return (
    <RouterProvider router={router} fallbackElement={<div>FAILED!</div>} />
  );
}

export default App;

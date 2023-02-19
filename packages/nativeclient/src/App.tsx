import "./App.css";
import { RouterProvider, Router } from "react-router-dom";

import { useEffect } from "react";
import { DarkMode, getDarkMode, setDarkMode } from "./common/helpers/DarkMode";
import { RouterType } from "./components/common/Routing";

interface AppProps {
  router: RouterType;
}

function App({ router }: AppProps) {
  useEffect(() => {
    const currentDarkMode = getDarkMode();
    if (!currentDarkMode) {
      setDarkMode(DarkMode.Light);
    }
  }, []);

  return (
    <RouterProvider router={router} fallbackElement={<div>FAILED!</div>} />
  );
}

export default App;

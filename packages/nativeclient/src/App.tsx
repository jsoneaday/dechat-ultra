import "./App.css";
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./common/redux/Store";
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
    <ReduxProvider store={store}>
      <RouterProvider router={router} fallbackElement={<div>FAILED!</div>} />
    </ReduxProvider>
  );
}

export default App;

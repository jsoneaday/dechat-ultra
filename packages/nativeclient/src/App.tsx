import "./App.css";
import Home from "./components/screens/Home";
import {
  RouterProvider,
  createMemoryRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./components/common/Layout";
import Topics from "./components/screens/Topics";
import Notifications from "./components/screens/Notifications";
import { useEffect } from "react";
import { DarkMode, getDarkMode, setDarkMode } from "./common/helpers/DarkMode";

const router = createMemoryRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/topics" element={<Topics />} />
      <Route path="/notifications" element={<Notifications />} />
    </Route>
  )
);

function App() {
  useEffect(() => {
    setDarkMode(DarkMode.Dark);
  }, []);

  return (
    <RouterProvider router={router} fallbackElement={<div>FAILED!</div>} />
  );
}

export default App;

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
  return (
    <RouterProvider router={router} fallbackElement={<div>FAILED!</div>} />
  );
}

export default App;

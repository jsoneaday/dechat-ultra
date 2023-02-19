import {
  createMemoryRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../screens/Home";
import Layout from "../common/Layout";
import Topics from "../screens/Topics";
import Notifications from "../screens/Notifications";

const router = createMemoryRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/topics" element={<Topics />} />
      <Route path="/notifications" element={<Notifications />} />
    </Route>
  )
);

export default router;

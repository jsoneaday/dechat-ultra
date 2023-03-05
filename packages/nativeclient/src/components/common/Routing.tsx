import {
  createMemoryRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../screens/Home";
import Layout, { DeviceSize } from "../common/Layout";
import Topics from "../screens/Topics";
import Notifications from "../screens/Notifications";

export type RouterType = ReturnType<typeof createMemoryRouter>;

export enum RoutePaths {
  Home = "home",
  Topics = "topics",
  Notifications = "notifications",
}

export const routes = (
  <Route path="/" element={<Layout deviceSize={DeviceSize.Desktop} />}>
    <Route index element={<Home />} />
    <Route path="/topics" element={<Topics />} />
    <Route path="/notifications" element={<Notifications />} />
  </Route>
);
const router = createMemoryRouter(createRoutesFromElements(routes));

export default router;

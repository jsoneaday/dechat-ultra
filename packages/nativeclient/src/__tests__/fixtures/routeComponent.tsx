import React, { FC, ReactElement } from "react";
import { Route, useLocation } from "react-router-dom";
import Layout from "../../components/common/Layout";
import Home from "../../components/screens/Home";
import Notifications from "../../components/screens/Notifications";
import Topics from "../../components/screens/Topics";

export const RouteDisplayComponent = () => {
  const location = useLocation();

  return <div>{`pathname: ${location.pathname}`}</div>;
};

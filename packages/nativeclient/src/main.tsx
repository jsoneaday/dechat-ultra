import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import router from "./components/common/Routing";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App router={router} />
  </React.StrictMode>
);

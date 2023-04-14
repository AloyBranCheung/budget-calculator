import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Carousel, initTE } from "tw-elements";
initTE({ Carousel });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Providers from "./contexts/Providers";
import GlobalStyles from "./styles/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <Providers>
      <App />
    </Providers>
  </BrowserRouter>
);

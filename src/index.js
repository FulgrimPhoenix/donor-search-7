import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";
import { AdaptivityProvider, ConfigProvider } from "@vkontakte/vkui";

bridge.send("VKWebAppInit");

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ConfigProvider appearance="dark">
      <AdaptivityProvider>
        <App />
      </AdaptivityProvider>
    </ConfigProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import vkBridge from "@vkontakte/vk-bridge";
import { ConfigProvider, AdaptivityProvider, AppRoot } from "@vkontakte/vkui";
import "./app.css";

vkBridge.send("VKWebAppInit");

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <App />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import vkBridge from "@vkontakte/vk-bridge";
import { ConfigProvider, AdaptivityProvider, AppRoot } from "@vkontakte/vkui";
import "./app.css";
import "./myCustomThemeTokens.css";

vkBridge.send("VKWebAppInit");

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ConfigProvider
      tokensClassNames={{
        light: "myCustomThemeTokens--red",
        dark: "myCustomThemeTokens--red",
      }}
    >
      <AdaptivityProvider>
        <AppRoot>
          <App />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  </React.StrictMode>
);

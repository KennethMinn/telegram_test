import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SDKProvider } from "@telegram-apps/sdk-react";
import TelegramProvider from "./providers/TelegramProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SDKProvider acceptCustomStyles debug>
      <TelegramProvider>
        <App />
      </TelegramProvider>
    </SDKProvider>
  </StrictMode>
);

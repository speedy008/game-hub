import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.tsx";
import theme from "./libs/theme.ts";
import "./index.css";
import App from "./App.tsx";
import { ColorModeProvider } from "./components/ui/color-mode.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <ColorModeProvider forcedTheme="dark">
        <App />
      </ColorModeProvider>
    </Provider>
  </StrictMode>
);

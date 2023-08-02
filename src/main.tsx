import { createRoot } from "react-dom/client";
import { App } from "./App";

import "./styles/styles.css";

const rootElement = document.getElementById("app");

if (rootElement) {
  createRoot(rootElement as HTMLElement).render(<App />);
}

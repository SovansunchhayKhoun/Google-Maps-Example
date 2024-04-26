import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { APIProvider } from "@vis.gl/react-google-maps";

const API_KEY = import.meta.env.VITE_GOOGLE_MAP_API_KEY

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <APIProvider apiKey={API_KEY}>
      <App />
    </APIProvider>
  </React.StrictMode>
);

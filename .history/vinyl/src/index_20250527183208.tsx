import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/index.css";
import Header from "./components/Header.tsx";
import Shelf from "./components/Shelf.tsx";
import AutoScrollHandler from "./components/AutoScrollHander.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <AutoScrollHandler />
    <div
      style={{
        width: "100%",
        height: "75vh",
      }}
    ></div>
    <Shelf />
  </StrictMode>
);

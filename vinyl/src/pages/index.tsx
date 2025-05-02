import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/index.css";
import Header from "../components/Header.tsx";
import Shelf from "../components/Shelf.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <Shelf />
  </StrictMode>
);

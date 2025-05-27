import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/index.css";
import Header from "../components/Header.tsx";
import Shelf from "../components/Shelf.tsx";
import AutoScrollHandler from "../components/AutoScrollHander.tsx";
import BeautyBox from "../components/BeautyBox.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <AutoScrollHandler />
    <BeautyBox />
    <Shelf />
  </StrictMode>
);

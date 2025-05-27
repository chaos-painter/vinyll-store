import "../styles/Vinyl.css";
import { useState } from "react";
import VinylProps from "../utils/props.ts";

function Vinyl({ img }: VinylProps) {
  const img_src = `covers/${img}`;

  const [clicked, setClicked] = useState(false);

  return (
    <>
      <div
        onClick={() => setClicked(!clicked)}
        className={clicked ? "record record-clicked" : "record"}
      >
        <img src="vinyls/vinyl.webp" alt="vinyl" className="vinyl" />
        <img src={img_src} alt="cover" className="cover" />
      </div>
    </>
  );
}

export default Vinyl;

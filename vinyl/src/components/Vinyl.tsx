import "../styles/Vinyl.css";
import type { VinylProps } from "../utils/props.ts";

function Vinyl({ img, onClick }: VinylProps) {
  const img_src = `./src/assets/covers/${img}`;

  return (
    <>
      <div className="record" onClick={onClick}>
        <img src="./src/assets/vinyl.webp" alt="vinyl" className="vinyl" />
        <img src={img_src} alt="cover" className="cover" />
      </div>
    </>
  );
}

export default Vinyl;

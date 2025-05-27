import "../styles/Vinyl.css";
import VinylProps from "../utils/props.ts";

function Vinyl({ img, title }: VinylProps) {
  const img_src = `../assets/covers/${img}`;

  return (
    <>
      <div className="overlay">
        <img src={img_src} alt="vinyl cover" />
        <h1>{title}</h1>
      </div>
    </>
  );
}

export default Vinyl;

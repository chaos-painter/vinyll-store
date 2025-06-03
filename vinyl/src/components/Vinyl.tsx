import "../styles/Vinyl.css";
import type { VinylProps } from "../utils/props.ts";

<<<<<<< HEAD
function Vinyl({ img, onClick }: VinylProps) {
  const img_src = `./src/assets/covers/${img}`;
=======
function Vinyl({ img }: VinylProps) {
  const img_src = `../assets/covers/${img}`;

  const [clicked, setClicked] = useState(false);
>>>>>>> db557511ddcedf3ddcabfc1d6161969bbe16d877

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

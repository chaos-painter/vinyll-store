import "../styles/Shelf.css";
import Vinyl from "./Vinyl.tsx";
import { ShelfProps } from "../utils/props.ts";

function Shelf({ addItem, shelves }: ShelfProps) {
  return (
    <>
      {shelves.map((group, index) => (
        <div className="shelf" key={index}>
          <div className="records">
            {group.map((vinyl, i) => (
              <Vinyl
                key={i}
                img={vinyl.image}
                onClick={() => addItem({ name: vinyl.name, price: 99 })}
              />
            ))}
          </div>
          <div className="shelf-body"></div>
        </div>
      ))}
    </>
  );
}

export default Shelf;

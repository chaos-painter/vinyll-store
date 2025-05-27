import "../styles/Shelf.css";
import Vinyl from "./Vinyl.tsx";

import vinyls from "../../public/vinyls/vinyls.json";
import { useState, useEffect } from "react";

function Shelf() {
  const shelves = [];
  const [vinylsPerShelf, setVinylsPerShelf] = useState(() =>
    window.innerWidth < 768 ? 2 : 4
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVinylsPerShelf(2);
      } else {
        setVinylsPerShelf(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  for (let i = 0; i < vinyls.length; i += vinylsPerShelf) {
    shelves.push(vinyls.slice(i, i + vinylsPerShelf));
  }

  return (
    <>
      {shelves.map((group, index) => (
        <div className="shelf" key={index}>
          <div className="records">
            {group.map((vinyl, i) => (
              <Vinyl key={i} img={vinyl.image} />
            ))}
          </div>
          <div className="shelf-body"></div>
        </div>
      ))}
    </>
  );
}

export default Shelf;
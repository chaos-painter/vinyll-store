import { useState, useEffect } from "react";
import vinyls from "../data/vinyls.json";
import { VinylItem } from "./models";
 
function getVinyls() {
  const shelves: VinylItem[][] = [];
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

  return { shelves }
}

export default getVinyls;

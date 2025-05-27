import "../styles/Shelf.css";
import Vinyl from "./Vinyl.tsx";

function ShelfTop() {
  return (
    <>
      <div className="shelf shelf-top">
        <div className="shelf-front"></div>
        <div className="shelf-wall-left shelf-top-left-wall"></div>
        <div className="shelf-wall-right shelf-top-right-wall"></div>
        <div className="records">
          <Vinyl />
          <Vinyl />
          <Vinyl />
          <Vinyl />
        </div>
      </div>
    </>
  );
}

export default ShelfTop;

import "../styles/Shelf.css";
import Vinyl from "./Vinyl.tsx";
import vinyls from "../../public/vinyls/vinyls.json";

function Shelf() {
  const shelves = [];
  for (let i = 0; i < vinyls.length; i += 4) {
    shelves.push(vinyls.slice(i, i + 4));
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

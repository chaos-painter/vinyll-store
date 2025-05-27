import "../styles/Header.css";
import "../styles/fonts.css";

function Header() {
  return (
    <>
      <header>
        <nav>
          {/* <ul className="navbar">
            <li className="navbar-element">Home</li>
            <li className="navbar-element">Snake</li>
            <li className="navbar-element">Sonic</li>
            <li className="navbar-element">Wario</li>
          </ul> */}
          <img
            src="/SVG/Asset 2.svg"
            alt="logo"
            style={{ width: "80px", height: "auto" }}
          ></img>
        </nav>
      </header>
    </>
  );
}

export default Header;

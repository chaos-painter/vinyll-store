import "../styles/Header.css";

function Header() {
  return (
    <>
      <header>
        <nav>
          <ul className="navbar">
            <li className="navbar-element">Home</li>
            <li className="navbar-element">Snake</li>
            <li className="navbar-element">Sonic</li>
            <li className="navbar-element">Wario</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;

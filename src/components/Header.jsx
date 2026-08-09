import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="app-header">
      <nav className="app-header__nav">
        <ul className="app-header__nav-list flex">
          <li className="app-header__nav-item">
            <Link className="app-header__nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="app-header__nav-item">
            <Link className="app-header__nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

import logo from '../../assets/logoReact.png';
import './Header.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} className="" alt="React logo" />
      </Link>
    </header>
  );
}

export default Header;


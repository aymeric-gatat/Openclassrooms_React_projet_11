import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Kasa" className="logo" />
      <nav className="primary-menu">
        <NavLink to={"/"}>Accueil</NavLink>
        <NavLink to={"/about"}>À propos</NavLink>
      </nav>
    </header>
  );
}

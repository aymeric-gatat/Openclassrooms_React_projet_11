import logo from "../../assets/logo-white.svg";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer>
      <img src={logo} alt="Kasa logo blanc" />
      <p>© {date} Kasa. All rights reserved</p>
    </footer>
  );
}

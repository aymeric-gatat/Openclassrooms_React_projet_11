import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";
import { NavLink } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <Header />
      <main className="error-page">
        <p className="error-number">404</p>
        <p className="error-text">Oups! La page que vous demandez n'existe pas.</p>
        <NavLink to={"/"}>Retourner sur la page d’accueil</NavLink>
      </main>
      <Footer />
    </>
  );
}

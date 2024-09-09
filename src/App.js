import { Outlet } from "react-router-dom";
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";

function App() {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;

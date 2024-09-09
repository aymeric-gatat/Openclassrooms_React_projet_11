import Entete from "../components/layouts/entete";
import Card from "../components/card";
import imageBackground from "../assets/bg-image-1.jpeg";

import data from "../data/location.json";

export default function Home() {
  const title = "Chez vous, partout et ailleurs";
  return (
    <section id="home">
      <Entete content={title} background={imageBackground} />
      <div className="cards">
        <Card data={data} />
      </div>
    </section>
  );
}

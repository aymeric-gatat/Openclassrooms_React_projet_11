import { useState } from "react";
import arrow from "../assets/arrow.svg";

export default function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < images.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      setIndex(0);
    }
  };

  const handlePrevious = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    } else {
      setIndex(images.length - 1);
    }
  };

  return (
    <div className="carousel">
      <img src={images[index]} alt="location" className="carousel-img" />
      <button onClick={handlePrevious} className="btn btn-previous">
        <img src={arrow} alt="Retour" />
      </button>
      <button onClick={handleNext} className="btn btn-next">
        <img src={arrow} alt="Suivant" />
      </button>
    </div>
  );
}

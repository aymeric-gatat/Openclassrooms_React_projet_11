import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Avatar from "../components/avatar";
import Tags from "../components/tags";
import Rating from "../components/rating";
import Dropdown from "../components/dropdown";
import Carousel from "../components/carousel";
import data from "../data/location.json";

export default function Logement() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = data.find((item) => item.id === id);

  useEffect(() => {
    if (!location) {
      navigate("/404");
    }
  }, [location, navigate]);

  if (!location) {
    return null;
  }

  return (
    <section id="logement">
      <Carousel images={location.pictures} />
      <div className="information">
        <div className="left">
          <div className="title">
            <h1>{location.title}</h1>
            <p className="subtitle">{location.location}</p>
          </div>
          <Tags tags={location.tags} />
        </div>
        <div className="right">
          <Avatar host={location.host} />
          <Rating rating={location.rating} />
        </div>
      </div>
      <div className="full">
        <Dropdown title={"Description"} content={location.description} type={"text"} />
        <Dropdown title={"Équipements"} content={location.equipments} type={"list"} />
      </div>
    </section>
  );
}

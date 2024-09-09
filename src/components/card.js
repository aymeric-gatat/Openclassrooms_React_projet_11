import { Link } from "react-router-dom";

export default function Card({ data }) {
  return (
    <>
      {data.map((logement) => (
        <div className="card" key={logement.id}>
          <img src={logement.cover} alt={logement.title} />
          <Link className="card-title" to={`/logement/${logement.id}`}>
            {logement.title}
          </Link>
        </div>
      ))}
    </>
  );
}

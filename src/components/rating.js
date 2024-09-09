import { ReactComponent as StarIconGray } from "../assets/star-gray.svg";
import { ReactComponent as StarIconFull } from "../assets/star-full.svg";

export default function Rating({ rating }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {stars.map((star) => (
        <span key={star} className="star">
          {star <= rating ? <StarIconFull /> : <StarIconGray />}
        </span>
      ))}
    </div>
  );
}

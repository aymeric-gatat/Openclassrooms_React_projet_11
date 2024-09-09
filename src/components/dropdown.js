import { useState } from "react";
import arrow from "../assets/arrow.svg";

export default function Dropdown({ title, content, type }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${isOpen ? "open" : ""}`}>
      <div className="dropdown-title" onClick={handleOpen}>
        <h3>{title}</h3>
        <img src={arrow} alt="arrow" />
      </div>
      {isOpen && (
        <div className="dropdown-content">
          {type === "text" ? (
            <p>{content}</p>
          ) : (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

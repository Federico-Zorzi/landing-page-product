import { memo } from "react";

const DuckCard = memo(({ duck }) => {
  return (
    <div className="duck-card">
      <div className="duck-img">
        <img src={duck.image} alt={duck.name} />
      </div>
      <div className="duck-content">
        <div className="duck-vote">
          {[...Array(duck.vote)].map((_, index) => (
            <i key={index} className="fa-solid fa-star"></i>
          ))}
        </div>
        <p className="duck-name">{duck.name}</p>
        <span className="duck-price">${duck.price}</span>
      </div>
    </div>
  );
});

export default DuckCard;

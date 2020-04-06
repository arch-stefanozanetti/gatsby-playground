import React from "react";

const Card = ({title, content, image }) => {
  return (
    <div className="cardWrapper">
      <div className={`cardHeaderImage ${image}`}>
        {image}
        <h3>{title}</h3>
      </div>
      <div className="textWrapper card">
        <p className="paragraph center">{content}</p>
      </div>
      <button className="buttons card">read more</button>
    </div>
  );
};
export default Card;

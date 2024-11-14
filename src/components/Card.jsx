import React from "react";

function Card(props) {
  const { name, description } = props;
  const imageUrl = "https://placehold.co/100x100";
  return (
    <div className="card">
      <img className="item-image" src={imageUrl} alt="item logo" />
      <p className="item-name">{name}</p>
      <p className="item-description">{description}</p>
    </div>
  );
}

export default Card;

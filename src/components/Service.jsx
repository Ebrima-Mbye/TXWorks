import React from "react";

function Service(props) {
  const { title, description } = props;
  return (
    <div className="service-card">
      <h3 className="service-title">{title}</h3>
      <img
        className="service-image"
        src="https://placehold.co/200x200"
        alt=""
      />
      <p className="service-description">{description}</p>
    </div>
  );
}

export default Service;

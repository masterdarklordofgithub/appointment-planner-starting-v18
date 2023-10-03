import React from "react";

export const Tile = ({ name, description }) => {
  const values =
    Object.values(description).map((item, index) => {
      return (
        <p key={index} className="tile">
          {item}
        </p>
      );
    })

  return (
    <div className="tile-container">
      <p>{name}</p>
      {values}
    </div>
  );
};

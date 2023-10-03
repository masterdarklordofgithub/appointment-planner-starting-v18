import React from "react";
import { Tile } from "../tile/Tile.js";

export const TileList = ({ items }) => {
  // Map over the contacts array and create a Tile component for each contact
  const listOfItems = items.map((item, i) => {
    // Destructure the name property from the contact object and assign the remaining properties to the rest variable
    const { name, ...rest } = item;
    console.log(name, rest);
    // Render a Tile component with props for the contact's name and the remaining properties
    return (
      <Tile key={i} name={item.name} description={rest}>
      </Tile>
    );
  })
  // Render a div containing the list of Tile components
  return (
    <div id="tileList" name="tileList">{listOfItems}</div>
  );
};

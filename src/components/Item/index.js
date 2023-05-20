import React from "react";

function Item({ font, text }) {
  return <li style={{ fontFamily: `${font}` }}> {text} </li>;
}

export default Item;

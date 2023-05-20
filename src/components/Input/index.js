import React from "react";

function Input(prop) {
  return <input type="text" value={prop.text} onChange={prop.handleChange} />;
}

export default Input;

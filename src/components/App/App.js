import React from "react";
import "./App.css";
import Input from "../Input/index";
import Item from "../Item/index";
import { useState } from "react";

function App() {
  //create a state
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }
  //hand your props into your Input and Item components.

  return (
    <div className="App">
      <h1>Type below: </h1>
      <Input text={text} handleChange={handleChange} />
      <br></br>
      <Item font="Verdana" text={text} />
      <br></br>
      <Item font="Helvetica" text={text} />
      <br></br>
      <Item font="Arial" text={text} />
      <br></br>
      <Item font="Times New Roman" text={text} />
      <br></br>
      <Item font="Serif" text={text} />
    </div>
  );
}

export default App;

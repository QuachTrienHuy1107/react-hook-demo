import React, { useState } from "react";
import "./Box.css";

function Box() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box_color") || "deeppink";
    return initColor;
  });

  const arrColor = ["red", "green", "black", "yellow", "blue"];

  function getColor() {
    const randomColor = arrColor[Math.floor(Math.random() * arrColor.length)];
    localStorage.setItem("box_color", randomColor);
    return randomColor;
  }

  return (
    <div>
      <div
        className="box"
        style={{ background: color }}
        onClick={() => {
          setColor(getColor());
        }}
      ></div>
    </div>
  );
}

export default Box;

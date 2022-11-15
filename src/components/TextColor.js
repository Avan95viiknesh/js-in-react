import React, { useState } from "react";
import "../App.css";

const TextColor = () => {
  const [index, setIndex] = useState(0);

  const change = ["primary", "success", "warning", "danger"];

  const changeText = change[Math.floor(Math.random() * change.length)];

  console.log(changeText);

  const textColor = () => {
    switch (changeText) {
      case "primary":
        return "primary";
      case "success":
        return "success";
      case "warning":
        return "warning";
      case "danger":
        return "danger";
      default:
    }
  };

  const addElement = () => {
    setIndex(index + 1);
  };

  return (
    <div>
      <button onClick={addElement}>get item</button>
      <h1>
        {" "}
        your today task result is{" "}
        <span className={textColor()}> {changeText} </span>{" "}
      </h1>
    </div>
  );
};

export default TextColor;

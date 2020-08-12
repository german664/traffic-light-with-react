import React, { useState } from "react";

const TrafficContainer = () => {
  const [selected, SetSelected] = useState(null);
  return (
    <div className="containerLights d-flex flex-column">
      <div
        id="redLight"
        className={selected === "red" ? "light red selected" : "light red"}
        onClick={(e) => {
          SetSelected("red");
        }}
      ></div>
      <div
        id="yellowLight"
        className={
          selected === "yellow" ? "light yellow selected" : "light yellow"
        }
        onClick={(e) => {
          SetSelected("yellow");
        }}
      ></div>
      <div
        id="greenLight"
        className={
          selected === "green" ? "light green selected" : "light green"
        }
        onClick={(e) => {
          SetSelected("green");
        }}
      ></div>
    </div>
  );
};

export default TrafficContainer;

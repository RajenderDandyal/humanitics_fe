import React from "react";
import "./styles.css";

function Sensor({ style, state, text }) {
  return (
    <>
      <div
        style={{
          ...style,
          backgroundColor:
            state === "ok" ? "green" : state === "broken" ? "red" : "yellow",
        }}
        className="sensor-container"
      >
        <h3 className="sensor-text">{text}</h3>
      </div>
    </>
  );
}

export default Sensor;

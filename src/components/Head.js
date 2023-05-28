import React, { useEffect, useState } from "react";

import Sensor from "./Sensor";
import { findState } from "../utils";

import "./styles.css";

function Head({ atdState }) {
  const [headPos, setheadPos] = useState(null);

  useEffect(() => {
    const head = document.getElementById("head");
    const coords = head.getBoundingClientRect();
    setheadPos(coords);
  }, []);

  return (
    <div className="head" id="head">
      <Sensor
        style={{
          transform: `translate(${headPos?.width / 2 - 13}px, -10px)`,
        }}
        state={findState(atdState, 1)}
        text={1}
      />
      <Sensor
        style={{
          transform: `translate(${headPos?.width / 2 - 12}px, ${
            headPos?.height - 16
          }px)`,
        }}
        state={findState(atdState, 2)}
        text={2}
      />
    </div>
  );
}

export default Head;

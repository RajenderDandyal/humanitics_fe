import React, { useEffect, useState } from "react";

import Sensor from "./Sensor";
import { findState } from "../utils";

import "./styles.css";

function Arms({ atdState }) {
  const [armsPos, setarmsPos] = useState(null);

  useEffect(() => {
    const arms = document.getElementById("arms");
    const coords = arms.getBoundingClientRect();
    setarmsPos(coords);
  }, []);

  return (
    <div className="arms" id="arms">
      <Sensor
        style={{
          transform: `translate(${armsPos?.width / 2 - 13}px, -10px)`,
        }}
        state={findState(atdState, 5)}
        text={5}
      />
      <Sensor
        style={{
          transform: `translate(${-10}px, ${armsPos?.height - 16}px)`,
        }}
        state={findState(atdState, 4)}
        text={4}
      />
      <div className="armRight">
        <Sensor
          style={{
            transform: `translate(${-10}px, ${-9}px)`,
          }}
          state={findState(atdState, 3)}
          text={3}
        />
      </div>
      <div className="armLeft">
        <Sensor
          style={{
            transform: `rotate(180deg) translate(${10}px, ${9}px)`,
          }}
          state={findState(atdState, 6)}
          text={6}
        />
      </div>
    </div>
  );
}

export default Arms;

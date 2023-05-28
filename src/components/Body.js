import React, { useEffect, useState } from "react";

import Sensor from "./Sensor";
import { findState } from "../utils";

import "./styles.css";

function Body({ atdState }) {
  const [bodyPos, setbodyPos] = useState(null);
  useEffect(() => {
    const body = document.getElementById("body");
    const coords = body.getBoundingClientRect();
    setbodyPos(coords);
  }, []);
  return (
    <div className="body" id="body">
      <Sensor
        style={{
          transform: `translate(${bodyPos?.width / 2 - 12}px, ${
            bodyPos?.height - 16
          }px)`,
        }}
        state={findState(atdState, 8)}
        text={8}
      />
    </div>
  );
}

export default Body;

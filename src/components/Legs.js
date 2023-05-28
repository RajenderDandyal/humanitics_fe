import React, { useEffect, useState } from "react";

import Sensor from "./Sensor";
import { findState } from "../utils";

import "./styles.css";

function Legs({ atdState }) {
  return (
    <div id="legs">
      <div className="legRight" id="legRight">
        <Sensor
          style={{
            transform: `rotate(190deg)`,
            top: "-9px",
            left: "150px",
          }}
          state={findState(atdState, 7)}
          text={7}
        />
      </div>
      <div className="legLeft" id="legRight">
        <Sensor
          style={{
            transform: `rotate(0deg)`,
            top: "-9px",
            left: "150px",
          }}
          state={findState(atdState, 9)}
          text={9}
        />
      </div>
    </div>
  );
}

export default Legs;

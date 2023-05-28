import { useState } from "react";
import "./App.css";
import Arms from "./components/Arms";
import Body from "./components/Body";
import Head from "./components/Head";
import Legs from "./components/Legs";

function App() {
  const [input, setInput] = useState("GGGGGRYRG");
  const [error, setError] = useState("");
  const [atdState, setAtdState] = useState([
    { number: 1, state: "ok" },
    { number: 2, state: "ok" },
    { number: 3, state: "ok" },
    { number: 4, state: "ok" },
    { number: 5, state: "ok" },
    { number: 6, state: "broken" },
    { number: 7, state: "unstable" },
    { number: 8, state: "broken" },
    { number: 9, state: "ok" },
  ]);

  const handleBlur = (e) => {
    if (input?.length < 9) {
      setError("Please enter 9 characters");
    } else {
      setError("");
    }
  };

  const updateState = () => {
    const arrInput = input.split("");

    const newState = [];
    arrInput.forEach((color, index) => {
      newState.push({
        number: index + 1,
        state:
          color === "G"
            ? "ok"
            : color === "R"
            ? "broken"
            : color === "Y"
            ? "unstable"
            : setError("Please enter a valid state"),
      });
    });

    setAtdState(newState);
  };

  const handleButtonClick = () => {
    updateState();
  };
  const handleInput = (e) => {
    const value = e.target.value;

    setInput(value?.toUpperCase());
  };
  return (
    <div className="App">
      <div className={"input-container"}>
        <input value={input} onChange={handleInput} onBlur={handleBlur} />
        <button
          className="button"
          onClick={handleButtonClick}
          disabled={input === "GGGGGRYRG"}
        >
          Change State
        </button>
        <p style={{ color: "red" }}>{error}</p>
      </div>

      <Head atdState={atdState} />
      <Body atdState={atdState} />
      <Arms atdState={atdState} />
      <Legs atdState={atdState} />
    </div>
  );
}

export default App;

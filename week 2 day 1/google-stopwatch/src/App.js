import React from "react";
import { Stopwatch } from "./Components/Stopwatch";
import { Timer } from "./Components/Timer";
import "./styles.css";

export default function App() {
  const [flag, setFlag] = React.useState(true);
  const handleClick = () => {
    setFlag(!flag);
  };
  return (
    <div className="App">
      <div>
        <button onClick={handleClick}>Timer</button>
        <button onClick={handleClick}>Stopwatch</button>
      </div>
      {flag && <Timer />}
      {!flag && <Stopwatch />}
    </div>
  );
}

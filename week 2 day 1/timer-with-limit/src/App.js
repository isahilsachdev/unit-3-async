import React from "react";
import "./styles.css";
import { Timer } from "./Timer";

export default function App() {
  const [flag, setFlag] = React.useState(false);
  const [start, setStart] = React.useState(0);
  const ending = 5;

  return (
    <div className="App">
      {!flag && <button onClick={() => setFlag(!flag)}> Start </button>}
      {flag && <Timer ending={ending} start={start} setStart={setStart} />}
    </div>
  );
}

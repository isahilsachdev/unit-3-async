import React, { useRef } from "react";
import "./Styles.css";

const Stopwatch = () => {
  const init = {
    sec: 0,
    mil: 0
  };
  const [time, setTime] = React.useState(init);
  const ref = useRef();
  const [flag, setFlag] = React.useState(true);

  const handleStart = () => {
    setFlag(!flag);

    if (flag) {
      ref.current = setInterval(() => {
        setTime((t) => {
          if (t.mil === 99) {
            return {
              sec: t.sec + 1,
              mil: 0
            };
          } else {
            return {
              sec: t.sec,
              mil: t.mil + 1
            };
          }
        });
      }, 20);
    } else {
      clearInterval(ref.current);
    }
  };

  const handleStop = () => {
    clearInterval(ref.current);
    return setTime((t) => {
      return {
        sec: 0,
        mil: 0
      };
    });
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <h1>
        {time.sec}:{time.mil}
      </h1>
      <button onClick={handleStart}>{flag ? "Start" : "Stop"}</button>
      <button onClick={handleStop}>Reset</button>
    </div>
  );
};

export { Stopwatch };

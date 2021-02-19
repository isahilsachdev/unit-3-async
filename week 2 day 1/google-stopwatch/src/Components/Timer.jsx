import React from "react";
import "./Styles.css";

const Timer = () => {
  let init = {
    min: 5,
    sec: 0
  };
  const [time, setTime] = React.useState(init);

  const handleTimer = () => {
    const time = setInterval(() => {
      setTime((t) => {
        if (t.sec === 0 && t.min === 0) {
          clearInterval(time);
          return t;
        } else if (t.sec === 0 && t.min !== 0) {
          return {
            min: t.min - 1,
            sec: 59
          };
        } else if (t.sec !== 0) {
          return {
            min: t.min,
            sec: t.sec - 1
          };
        }
      });
    }, 1000);
  };
  return (
    <div>
      <div>
        <h1>Timer</h1>
        <h1>
          {time.min}:{time.sec}
        </h1>
      </div>
      <div>
        <button onClick={handleTimer} className="start__button">
          Start
        </button>
      </div>
    </div>
  );
};

export { Timer };

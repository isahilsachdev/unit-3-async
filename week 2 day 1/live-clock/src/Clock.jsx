import React from "react";

const Clock = () => {
  const [date, setDate] = React.useState("");
  const [flag, setFlag] = React.useState(false);

  const startClock = () => {
    setFlag(!flag);

    const set_it = setInterval(() => {
      setDate((date) => new Date().toLocaleTimeString());
    });
  };

  return (
    <div>
      <button onClick={startClock}>{flag ? "End" : "Start"}</button>
      {flag && <h1>{date}</h1>}
    </div>
  );
};

export { Clock };

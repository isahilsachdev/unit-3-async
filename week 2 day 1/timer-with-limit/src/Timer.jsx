import React from "react";

const Timer = ({ start, ending, setStart }) => {
  // props.start++
  React.useEffect(() => {
    const inc = setInterval(() => {
      setStart((start) => {
        if (start == ending - 1) {
          clearInterval(inc);
        }
        return start + 1;
      });
    }, 1000);

    //   return() => (
    //     clearInterval(inc));
  }, []);

  return (
    <div>
      <h2> Starting time : {start} </h2>
      <h2> Ending time : {ending} </h2>
    </div>
  );
};

export { Timer };

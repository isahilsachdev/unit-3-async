import React from "react";
// import { ReduxContext } from "./Provider";
import { addNum, reduceNum } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
const Calculator = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={() => dispatch(addNum(1))}>Add</button>
      <button onClick={() => dispatch(reduceNum(1))}>Reduce</button>
    </div>
  );
};
export { Calculator };
